# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
from app.database.Models.Project import Project
# from app.db.Models.Technologies import Technologies

# app = Flask(__name__)
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////db/portfolio_projects.db"

# db = SQLAlchemy(app)
from app import app

@app.route('/')
def home():
    print("Hello")

@app.route('/projects')
def projects():
    projects = Project.all()
    print(projects)
    return projects
    