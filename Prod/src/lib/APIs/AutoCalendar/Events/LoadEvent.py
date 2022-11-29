# Right now all this does is makes sure we can grab the event from the database
# as a JSON object. We actually populating the calendar on the frontend will be done
# later.

import json

# Get the event from the database as a JSON object
def GetEvent(event_name):
  f = open("event_data.json")
  data = json.load(f)
  f.close()
  # Will return None if the event doesn't exist
  if data == None:
    return None;
  for e in data['event_data']:
    if e['name'] == event_name:
      return e
  return None

# Actually sends the event to the calendar (right now we just print to console)
def LoadEvent(event_name):
  event_data = GetEvent(event_name)
  # Make sure we actually found the event
  if event_data == None:
    print("Event '" + event_name + "' not found\n")
    return
  # For now, just print the event_info
  print(event_name + ":")
  print("  type = " + event_data['type'])
  print("  starts = " + event_data['start_date'])
  print("  ends = " + event_data['end_date'])
  if event_data['completed']:
    print("  This event has already ended.\n")
  else:
    print("  This event has not yet ended.\n")

# Main function (just for testing, not to be used in any way for the project)
if __name__ == "__main__":
  while 1:
    name = input("Event to load: ")
    LoadEvent(name)