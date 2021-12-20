from app import db

class Project(db.Model):
    id              = db.Column("id", db.Integer, primary_key=True)
    title           = db.Column("title", db.String())
    description     = db.Column("description", db.String())
    link            = db.Column("link", db.String())
    github_link     = db.Column("github_link", db.String())

    def __repr__(self):
        return '<Project %r>' % self.id

    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}