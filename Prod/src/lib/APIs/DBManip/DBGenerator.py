#This file is intended to be a one-and-done setup file. Run with command: python3 DBGenerator.py

import sqlite3
from sqlite3 import Error

def create_db(location):
    db = None
    try:
        db = sqlite3.connect(location)
        print("Done")
        return db
    except Error as e:
        print(e)

    return db


def create_table(db, table_command):
    try:
        command = db.cursor()
        command.execute(table_command)
    except Error as e:
        print(e)


def create_from_template():
    db = create_db(r"..\prodoDB.db")

    create_user_command = """CREATE TABLE User (
                                user_id          INTEGER      NOT NULL
                                                            PRIMARY KEY
                                                            UNIQUE,
                                username         TEXT         NOT NULL
                                                            UNIQUE,
                                password         TEXT         NOT NULL,
                                email            TEXT       UNIQUE
                                                            NOT NULL,
                                phone            INTEGER (10),
                                first_name       TEXT,
                                last_name        TEXT,
                                organization_ids TEXT,
                                class_ids        TEXT,
                                event_ids        TEXT
                            );"""
    create_organization_command = """CREATE TABLE Organization (
                                        organization_id   INTEGER UNIQUE
                                                                NOT NULL
                                                                PRIMARY KEY,
                                        organization_name TEXT    UNIQUE
                                                                NOT NULL,
                                        class_ids         TEXT,
                                        event_ids         TEXT,
                                        member_ids        TEXT
                                    );"""
    create_class_command = """CREATE TABLE Class (
                                class_id        INTEGER NOT NULL
                                                        UNIQUE
                                                        PRIMARY KEY,
                                class_name      TEXT    NOT NULL,
                                organization_id INTEGER REFERENCES Organization (organization_id) ON UPDATE NO ACTION
                                                        NOT NULL,
                                event_ids       TEXT,
                                member_ids      TEXT
                            );"""
    create_event_command = """CREATE TABLE Event (
                                event_id       INTEGER PRIMARY KEY
                                                    UNIQUE
                                                    NOT NULL,
                                event_name     TEXT    UNIQUE
                                                    NOT NULL,
                                event_type     TEXT,
                                attendee_count INTEGER NOT NULL,
                                start_date     TEXT  NOT NULL,
                                end_date       TEXT  NOT NULL,
                                completed      BOOLEAN DEFAULT (0) 
                                                    NOT NULL
                            );"""

    create_table(db, create_user_command)
    create_table(db, create_organization_command)
    create_table(db, create_class_command)
    create_table(db, create_event_command)

def main():
    create_from_template()

if __name__ == '__main__':
    main()
