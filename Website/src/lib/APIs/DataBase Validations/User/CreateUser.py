import json
import requests
import ValidateUser as validation

# This just gets the data input from the user from the frontend as a JSON (Will update)
def GetData(path):
  #f = requests.get(path)
  f = open(path)
  data = json.load(f)
  f.close()
  return data['user_input'][0]

# Procedure that adds a user to the database after checking that they don't already exist
def CreateUser(path):
  # Get the input values
  user = GetData(path)
  if user == None:
    print("Bad input data")
  # Check that the user doesn't already exist
  exists = validation.ValidateUser(user['username'], user['password'], "..\\user_data.json")
  if exists:
    print("Account with this username already exists")
    return
  print("OK to create this account")
  # Add the new user to the "database" (this will look much different later)
  with open("..\\user_data.json", 'r+') as db:
    data = json.load(db);
    data['user_data'].append(user)
    db.seek(0)
    json.dump(data, db, indent = 2)

# Main function
if __name__ == "__main__":
  CreateUser("..\\user_input.json")