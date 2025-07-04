from transformers import pipeline
# sentiment_pipeline = pipeline("text-classification", model="nateraw/bert-base-uncased-emotion")
sentiment_pipeline = pipeline("text-classification", model="SamLowe/roberta-base-go_emotions")

def analyze_sentiment(text):
    result = sentiment_pipeline(text)[0]  # returns {'label': 'sadness', 'score': 0.93}
    return {
        "emotion": result["label"].lower(),  # lowercase for consistency
        "score": round(result["score"], 3)
    }