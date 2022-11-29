import Database from "better-sqlite3";

// Open database file
const db = Database("database.sqlite");

// Enable WAL for maximum performance
db.pragma("journal_mode = WAL");

export default db;