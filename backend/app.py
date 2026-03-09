from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/safety")
def safety_score():
    return jsonify({"score": 82, "message": "Route is relatively safe"})

if __name__ == "__main__":
    app.run()