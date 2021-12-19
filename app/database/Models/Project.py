from app import db

class Project(db.Model):
    id              = db.Column("id", db.Integer, primary_key=True)
    title           = db.Column("title", db.String())
    description     = db.Column("description", db.String())
    link            = db.Column("link", db.String())
    github_link     = db.Column("github_link", db.String())

    def __init__(self, id, title, description, link, github_link):
        self.id = id
        self.title = title
        self.description = description
        self.link = link
        self.github_link = github_link
