import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy import func,inspect,table,column
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///db/belly_button_biodiversity.sqlite")
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)
Base.classes.keys()
inspector = inspect(engine)
inspector.get_table_names()
print(inspector.get_table_names())
otu = Base.classes.otu
samples = Base.classes.samples
samples_m=Base.classes.samples_metadata
session = Session(engine)
conn = engine.connect()
session = Session(bind=conn)