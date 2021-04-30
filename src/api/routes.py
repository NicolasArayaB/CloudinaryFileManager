"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import datetime

api = Blueprint('api', __name__)


@api.route('/login', methods=['POST'])
def login():    
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email:
        return jsonify({"msg":"Debes ingresar un email"}), 400

    if not password:
        return jsonify({"msg":"Contraseña es requerida"}), 400
    
    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"msg": "Email no valido",
        "status": 401
        
        }), 401

    elif not check_password_hash(user.password, password):
        return jsonify({"msg": "Contraseña no es válida",
        "status": 401
        }), 401

    expiration = datetime.timedelta(days=2)
    access_token = create_access_token(identity=user.email, expires_delta=expiration)

    data = {
        "token": access_token,
        "user": user.serialize(),
        "expires": expiration.total_seconds()*1000,
        "name": user.name,
        "status": 200
    }

    return jsonify(data), 200

@api.route('/register', methods=['POST'])
def register():

    name = request.json.get("name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not name:
        return "Debes ingresar tu nombre", 401
    
    if not email:
        return "Email es requerido", 401
    
    email_query = User.query.filter_by(email=email).first()
    
    if email_query:
        return "Esta cuenta ya esta registrada", 401

    if not password:
        return "Debes ingresar una contraseña", 401

    user = User()
    user.name = name
    user.email = email
    hashed_password = generate_password_hash(password)
    user.password = hashed_password
  
    db.session.add(user)
    db.session.commit()

    response_token = {
        "msg": "Usuario fue ingresado con exito"   
    }

    return jsonify(response_token), 200

@api.route('/files', methods = ['GET', 'POST'])
def file_upload():
  if request.method == 'GET':
    response_body = {
      files: Files.query.all()
    }
  else:
    filename = request.json.get("filename")
    uploaded_by = request.json.get("uploaded_by")
    uploaded_at = request.json.get("uploaded_at")
    file_format = request.json.get("file_format")
    url = request.json.get("url")

    newFile = File()
    newFile.filename = filename
    newFile.uploaded_by = uploaded_by
    newFile.uploaded_at = uploaded_at
    newFile.file_format = file_format
    newFile.url = url

    db.session.add(newFile)
    db.session.commit()

    response_body = {
      "msg" "Archivo almacenado con exito"
    }

  return jsonify(response_body), 200
  

  

