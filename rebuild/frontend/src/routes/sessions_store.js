import { writable } from "svelte/store";

let user_id = {
    email: "",
    id: ""
}

export const session_id = writable(user_id);