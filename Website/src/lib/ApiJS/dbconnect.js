// import Database from 'better-sqlite3';

// export const user = {
//     username: "bozo",
//     password: "bozo123",
//     firstName: "Mr. Bozo",
//     lastName: "Wild",
//     email: "jknckjndkj@gmail.com",
//     phone: 9018258967,
//     organization_ids: undefined,
//     class_ids: undefined,
//     event_ids: undefined
// };

// export const event = {
//     title: undefined,
//     deadline: undefined,
//     organization: undefined,
//     class: undefined,
//     type: undefined,
// };

// export function validateLogin(user){
//     // let obj = Object.create(user);
//     console.log(user);
// };

// export function newUser(user){
//     //let obj = Object.create(user);
//     let db = new sqlite3.Database('./prodoDB.db', (err) => {
//         if (err) {
//             return console.error(err.message);
//         }
//         console.log('Connected to the ProdoCal SQlite database.');
//     });
    
//     var bruh = db.prepare('INSERT INTO User(username, password, email, phone, first_name, last_name, organization_ids, class_ids, event_ids) VALUES(?,?,?,?,?,?,?,?,?)');
//     bruh.run(user.username, user.password, user.email, user.phone, user.firstName, user.lastName, user.organization_ids, user.class_ids, user.event_ids, (err) => {
//         if (err) {
//         return console.log(err.message);
//         }
//     });
    
//       // close the database connection
//     db.close((err) => {
//         if (err) {
//         return console.error(err.message);
//         }
//         console.log('Close the database connection.');
//     });
//     console.log(user);
// };

// export function validateEvent(event){
//     // let obj = Object.create(event);
//     console.log(event);
// };

// export function newEvent(event){
//     // let obj = Object.create(event);
//     console.log(event);
// };

