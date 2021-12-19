from app import db
from Project import Project

class Technologies(db.Model):
    id          = db.Column("id", db.Integer, primary_key=True)
    project_id  = db.Column("project_id", db.Integer, db.ForeignKey(Project.id))
    technology  = db.Column("title", db.String())

    def __init__(self, id, project_id, technology):
        self.id = id
        self.project_id = project_id
        self.technology = technology
        