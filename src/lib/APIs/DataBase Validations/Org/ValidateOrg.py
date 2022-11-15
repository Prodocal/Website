import json
import CreateOrg as creation
#import requests

def find_org(org, path):
        orgFlag = False
        userFlag = False
        f = open("..\data.json")
        data = json.load(f)
        f.close()
        if data == None:
            return None;
        for c in data["org_data"]:
            if c['orgname'] == org:
                return c
        return None
