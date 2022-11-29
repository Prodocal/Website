import json
import requests

# This function checks cookies to allow remembered logins - SPRINT 3
def CheckCookie(user):
  pass

# This function will create a cookie upon login - SPRINT 3
def RememberLogin():
  pass

# This function will search the database for a user with the given username
def FindUser(username, path):
  # Will return the data struct of the user if found
  # Load the data
  #f = requests.get(path)
  f = open(path)
  data = json.load(f)
  f.close()
  # Will return None if the user doesn't exist
  if data == None:
    return None;
  for u in data['user_data']:
    if u['username'] == username:
      return u
  return None

def ValidateUser(username, password, path):
  # Load the data
  user = FindUser(username, path)

  # If the user doesn't exist
  if user == None:
    return False

  # Checks the password
  if user['password'] == password:
    return True

  return False

# Main function
if __name__ == "__main__":

  if ValidateUser("mason", "muda da", "..\\user_data.json"):
    print("Validated")
  else:
    print("Could not validate")