from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from app.database.Models.Project import Project
from app.database.Models.Technologies import Technologies

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////database/portfolio_projects.db"

db = SQLAlchemy(app)