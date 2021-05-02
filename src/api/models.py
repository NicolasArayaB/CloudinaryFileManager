from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), unique=False, nullable=False)
  email = db.Column(db.String(120), unique=True, nullable=False)
  password = db.Column(db.String(250), unique=False, nullable=False)

  def __repr__(self):
    return '<User %r>' % self.name

  def serialize(self):
    return {
      "id": self.id,
      "name": self.name,
      "email": self.email
    }

class File(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  filename = db.Column(db.String(250), unique=False, nullable=False)
  uploaded_by = db.Column(db.String(50), unique=False)
  uploaded_at = db.Column(db.String(100), unique=False, nullable=False)
  file_format = db.Column(db.String(10), unique=False, nullable=False)
  url = db.Column(db.String(500), unique=False, nullable=False)

  def __repr__(self):
    return '<File %r>' % self.filename

  def serialize(self):
    return {
      "id": self.id,
      "filename": self.filename,
      "uploaded_by":self.uploaded_by,
      "uploaded_at": self.uploaded_at,
      "file_format": self.file_format,
      "url": self.url
    }
