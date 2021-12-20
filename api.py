from flask import jsonify
from app import app
from app.database.Models.Project import Project

@app.route("/", methods=["GET"])
def index():
    return "Hi"

@app.route("/projects", methods=["GET"])
def projects():
    projects = Project().query.all()
    all_projects = {"projects": [project.as_dict() for project in projects]}
    return all_projects

if __name__== '__main__':
    app.run(host="127.0.0.1", port=5000)
