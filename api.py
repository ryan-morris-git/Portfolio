from flask import request
from app import app
from app.database.Models.Project import Project
from app.database.Models.Technologies import Technologies

@app.route("/", methods=["GET"])
def index():
    return "Hi"

@app.route("/get_projects", methods=["GET", "POST"])
def projects():

    language = request.args.get("language", None)

    print(language)

    projects = Project().query.all()
    technologies = Technologies().query.all()

    all_projects = [project.as_dict() for project in projects]
    all_technologies = [technology.as_dict() for technology in technologies]

    for project in all_projects:
        project["technologies"] = []
        for technology in all_technologies:
            if technology["project_id"] == project["id"]:
                project["technologies"].append(technology["technology"])
                project["technologies"] = sorted(project["technologies"])

    if language and language not in ["Filters", "undefined"]:
        all_projects = [p for p in all_projects if language in p["technologies"]]

    return {"projects": all_projects}

if __name__== '__main__':
    app.run(host="127.0.0.1", port=5000)