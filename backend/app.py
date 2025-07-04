from flask import Flask, request, jsonify
from flask_cors import CORS
from sentiment import analyze_sentiment
from recommend import recommend_playlist    
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://ai-music-recommender.vercel.app/"}}, supports_credentials=True)

@app.route("/")
def home():
    return jsonify({"message": "AI Music Recommender Flask Backend is live!"})


@app.route("/analyze-text", methods=["POST"])
def analyze_text():
    data = request.get_json()
    text = data.get("text", "")
    result = analyze_sentiment(text)
    return jsonify(result)


@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json()
    mood = data.get("mood", "happy")
    playlist = recommend_playlist(mood)
    return jsonify(playlist)  # <-- returns array directly if frontend expects it
    # or jsonify({"playlist": playlist}) if you fixed the frontend accordingly

if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0',port=8000)
