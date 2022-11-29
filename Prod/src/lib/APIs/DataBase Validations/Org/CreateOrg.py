import json
#import requests

def GetData(path):
    #f = requests.get(path)
    f = open(path)
    data = json.load(f)
    f.close()
    return data['class_input'][0]

def CreateOrg(path):
    c = GetData(path)
    
    if c == None:
        print("Invalid Input")
        exit()

    with open(path, "r+") as db:
        data = json.load(db);
        data['org_data'].append(c)
        db.seek(0)
        json.dump(data, db, indent = 2)

