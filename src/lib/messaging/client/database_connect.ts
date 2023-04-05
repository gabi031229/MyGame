import {messengers} from "./messengers";
import {Status} from "../status";

export function get_data(username:string, ...path:string[]) {
    return messengers.data.get(username, path)
        .on(Status.OK, (res) => {
            console.log("OK");
            return res.message;
        })
        .on(Status.NOT_FOUND, () => console.log(`Can't find ${username}/${path} in userdata`))
        .send();
}

