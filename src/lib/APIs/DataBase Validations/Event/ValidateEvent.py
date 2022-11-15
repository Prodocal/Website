import json
#import requests

def FindEvent(id, __class__, org, path):
    #f = requests.get(path)
    classFlag = False
    orgFlag = False
    f = open(path)
    data = json.load(f)
    f.close()
    if data == None:
        return None
    for e in data["event_data"]:
        if e['eventname'] == id and e['classname'] == __class__ and e['org'] == org:
            return e
        elif e['classname'] == __class__:
            classFlag = True
        elif e['org'] == org:
            orgFlag = True
    if orgFlag == False:
        return -1
    elif classFlag == False:
        return -2
    else:
        return -3

if __name__ == "__main__":
    e = FindEvent("Monke Exam", "How2Monke", "Monkey U", "..\data.json")

    if e is None:
        print("Database empty")
        quit()
    elif e == -1:
        print("Organization not found")
        quit()
    elif e == -2:
        print("Class not found")
        quit()
    elif e == -3:
        print("Event not found")
        quit()
    
    print(e['org'])
    print(e['classname'])
    print(e['eventname'])
    print(e['members'])
    print(e['startdate'])
    print(e['enddate'])
    print(e['completed'])