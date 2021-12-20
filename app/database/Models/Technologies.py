from app import db
from Project import Project

class Technologies(db.Model):
    id          = db.Column("id", db.Integer, primary_key=True)
    project_id  = db.Column("project_id", db.Integer, db.ForeignKey(Project.id))
    technology  = db.Column("title", db.String())

    def __repr__(self):
        return '<Technologies %r>' % self.id
        
    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}