import portfolio
from waitress import serve
from dotenv import load_dotenv

load_dotenv(".env.production")

app = portfolio.create_app()

serve(app, listen="0.0.0.0:5000", url_scheme="http")

