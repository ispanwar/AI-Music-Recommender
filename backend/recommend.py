import os
from spotipy.oauth2 import SpotifyClientCredentials
import spotipy
from dotenv import load_dotenv

# Load credentials from .env
load_dotenv()
client_id = os.getenv("SPOTIPY_CLIENT_ID")
client_secret = os.getenv("SPOTIPY_CLIENT_SECRET")

# Spotify authentication
auth_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(auth_manager=auth_manager)

# Mood → Playlist search keyword
moods = {
    "admiration": "grateful",
    "amusement": "playful",
    "anger": "angry",
    "annoyance": "angry",
    "approval": "peaceful",
    "caring": "romantic",
    "confusion": "thoughtful",
    "curiosity": "dreamy",
    "desire": "hopeful",
    "disappointment": "sad",
    "disapproval": "melancholic",
    "disgust": "melancholic",
    "embarrassment": "fearful",
    "excitement": "excited",
    "fear": "anxious",
    "gratitude": "grateful",
    "grief": "lonely",
    "joy": "happy",
    "love": "romantic",
    "nervousness": "anxious",
    "optimism": "hopeful",
    "pride": "confident",
    "realization": "focused",
    "relief": "peaceful",
    "remorse": "melancholic",
    "sadness": "sad",
    "surprise": "surprised",
    "neutral": "neutral",
    "bored": "bored",
    "tired": "lazy",
    "burned out": "lazy",
    "stressed": "anxious",
    "insecure": "fearful",
    "inspired": "motivated",
    "determined": "determined",
    "creative": "creative",
    "overwhelmed": "anxious",
    "content": "peaceful",
    "fulfilled": "grateful",
    "lost": "melancholic",
    "hopeful": "hopeful",
    "peaceful": "peaceful",
    "empowered": "confident",
    "energized": "energetic",
    "lonely": "lonely",
    "motivated": "motivated",
    "reflective": "thoughtful",
    "nostalgic": "nostalgic",
    "focused": "focused"
}


def recommend_playlist(mood):
    query = moods.get(mood.lower(), "mood booster")
    results = sp.search(q=query, type='playlist', limit=5)

    playlists = results.get('playlists', {}).get('items', [])

    if not playlists:
        return [{
            "name": "Mood Booster",
            "url": "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0",
            "image": "https://i.scdn.co/image/ab67706f000000027fef4a2b64efb732993c9d0c"
        }]

    # ✅ Safely filter out any None items
    return [
        {
            "name": p["name"],
            "url": p["external_urls"]["spotify"],
            "image": p["images"][0]["url"] if p.get("images") else None
        }
        for p in playlists if p  # Make sure p is not None
    ]
