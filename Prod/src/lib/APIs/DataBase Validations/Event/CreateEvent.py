import requests
import json

def CreateEvent(user, event):
    eventJson = requests.get(event)
    
    print(eventJson)
    print(eventJson.json())
    