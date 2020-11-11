from os import environ as env
from typing import Iterable
from flask import Flask, abort, jsonify, make_response, request
from sendgrid import SendGridAPIClient
from sendgrid.helpers import mail as sendgrid


def create_app():
    app = Flask(__name__)

    @app.before_request
    def limit_access():
        allowed = env.get("FRONTEND_URL")
        if allowed not in request.headers.get("Origin", ""):
            abort(403)

    @app.after_request
    def after_request(response):
        """
        Global request processing.

        After every request is processed, this function will run. It currently
        checks for domains that are allowed to make CORS requests to make local
        development feasible.
        """
        allowed = "http://localhost:8000"
        if request.headers.get("Origin") in allowed:
            response.headers["Access-Control-Allow-Origin"] = request.headers["Origin"]
            response.headers["Access-Control-Allow-Methods"] = "PUT,GET,POST,DELETE"
            response.headers["Access-Control-Allow-Headers"] = "Content-Type,Authorization"
        return response

    @app.route("/contact", methods=["POST"])
    def handle_contact():
        """
        Contact form handler.

        API endpoint utilized after the contact form has been submitted. This
        handles actually sending the email notifying the site administators of
        the new contact request.
        """
        if not env.get("SENDGRID_KEY"):
            return make_response(
                jsonify(
                    {
                        "message": "Sorry, there are issues connecting to the email provider right now.",
                    }
                ),
                400,
            )

        if request.json.get("phone"):
            # honeypot phone number field to catch bots
            return make_response(jsonify({"message": "Sorry, cannot submit your request."}), 400)

        content = f"""
            A new email was sent in through the contact form:\n
            Name: {request.json.get("name")}
            Email: {request.json.get("email")}
            Message: {request.json.get("message")}
        """
        content = map(lambda line: line.lstrip(), content.split("\n"))
        content = "\n".join(content)

        client = SendGridAPIClient(api_key=env.get("SENDGRID_KEY"))
        client.send(
            sendgrid.Mail(
                from_email="support@bustererp.com",  # FIXME
                to_emails="holdenrehg@gmail.com",
                subject="Portfolio Contact Form Request",
                plain_text_content=content,
            )
        )

        return make_response(
            jsonify({"message": "Thanks! I'll email you as soon as I can."}),
            200,
        )

    return app
