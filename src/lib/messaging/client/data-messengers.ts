import {messenger} from "./messenger";
import {Message} from "../message";

export const dataMessengers = {
    get: (username: string, keys: string[]) => messenger({username, keys}, Message.GET_DATA)
}