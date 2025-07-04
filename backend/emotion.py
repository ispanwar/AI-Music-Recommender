# from fer import FER
# import numpy as np
# import cv2

# detector = FER()

# def detect_emotion(image_file):
#     contents = image_file.read()
#     nparr = np.frombuffer(contents, np.uint8)
#     img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
#     emotion, score = detector.top_emotion(img)
#     return {"emotion": emotion, "score": round(score, 3)}
