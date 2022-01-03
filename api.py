from flask import request, Response
from app import app as application
from app.database.Models.Project import Project
from app.database.Models.Technologies import Technologies

@application.route("/", methods=["GET"])
def index():
    return ""

@application.route("/get_projects", methods=["GET", "POST"])
def projects():
    language = request.args.get("language", None)

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

    resp = Response({"projects": all_projects})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Content-Type'] = 'application/json'

    return resp

if __name__== '__main__':
    application.run()
