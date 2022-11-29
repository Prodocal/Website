import sqlite3
from sqlite3 import Error

def locate_db(location):
    db = None
    try:
        db = sqlite3.connect(location)
        print("Done")
        return db
    except Error as e:
        print(e)

    return db


def create_user(db, userData):
    template = '''INSERT INTO User(user_id, username, password, email, phone, first_name, last_name, organization_ids, class_ids, event_ids)
                    VALUES(?,?,?,?,?,?,?,?,?,?)'''
    command = db.cursor()
    command.execute(template, userData)
    db.commit()

def create_organization(db, organizationData):
    template = '''INSERT INTO Organization(organization_id, organization_name, class_ids, event_ids, member_ids)
                    VALUES(?,?,?,?,?)'''
    command = db.cursor()
    command.execute(template, organizationData)
    db.commit()

def create_class(db, classData):
    template = '''INSERT INTO Class(class_id, class_name, organization_ids, event_ids, member_ids)
                    VALUES(?,?,?,?,?)'''
    command = db.cursor()
    command.execute(template, classData)
    db.commit()

def create_event(db, eventData):
    template = '''INSERT INTO Event(event_id, event_name, event_type, attendee_count, start_date, end_date)
                    VALUES(?,?,?,?,?)'''
    command = db.cursor()
    command.execute(template, eventData)
    db.commit()


def delete_user(db, id):
    template = 'Delete FROM User WHERE user_id=?'
    command = db.cursor()
    command.execute(template, (id,))
    db.commit()

def delete_organization(db, id):
    template = 'Delete FROM Organization WHERE organization_id=?'
    command = db.cursor()
    command.execute(template, (id,))
    db.commit()

def delete_class(db, id):
    template = 'Delete FROM Class WHERE class_id=?'
    command = db.cursor()
    command.execute(template, (id,))
    db.commit()

def delete_event(db, id):
    template = 'Delete FROM Event WHERE event_id=?'
    command = db.cursor()
    command.execute(template, (id,))
    db.commit()


def find_user(db, id):
    template = 'SELECT * FROM User WHERE user_id=?'
    command = db.cursor()
    command.execute(template, (id,))
    return command.fetchall()

def find_organization(db, id):
    template = 'SELECT * FROM Organization WHERE organization_id=?'
    command = db.cursor()
    command.execute(template, (id,))
    return command.fetchall()

def find_class(db, id):
    template = 'SELECT * FROM Class WHERE class_id=?'
    command = db.cursor()
    command.execute(template, (id,))
    return command.fetchall()

def find_event(db, id):
    template = 'SELECT * FROM Event WHERE event_id=?'
    command = db.cursor()
    command.execute(template, (id,))
    return command.fetchall()

#def main():
    #db = locate_db(r"..\prodoDB.db")
    #Example of how to load something into the database. This file is intended to be used as a header.
    #sarah = ('12121', 'CoolGirl0105', 'SarisAhQueen!234', 'SarahBlythe@gmail.com', '9182164811', 'Sarah', 'Blythe', '', '', '')
    #create_user(db, sarah)
    #print("Success")

#if __name__ == '__main__':
    #main()
