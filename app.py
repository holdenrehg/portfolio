import portfolio
from dotenv import load_dotenv

load_dotenv(".env.development")
app = portfolio.create_app()
