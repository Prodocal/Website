
export const user = {
    username: undefined,
    password: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
};

export const event = {
    title: undefined,
    deadline: undefined,
    organization: undefined,
    class: undefined,
    type: undefined,
};

export const stderr = {
    name_err: undefined,
    em_err: undefined,
    uname_err: undefined,
    pw_err: undefined,
    cpw_err: undefined,
};

export function validateLogin(user){
    // let obj = Object.create(user);
    console.log(user);
};

export function newUser(user){
    // let obj = Object.create(user);
    console.log(user);
};

export function validateEvent(event){
    // let obj = Object.create(event);
    console.log(event);
};

export function newEvent(event){
    // let obj = Object.create(event);
    console.log(event);
};
