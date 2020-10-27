#export FLASK_APP=thu.py => flask run

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('main.html')


@app.route('/saigon')
def goToSaiGon():
    return render_template('saigon.html')