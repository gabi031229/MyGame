import {messenger} from "./messenger";
import {Message} from "../message";

export const dataMessengers = {
    get: (username: string, keys: string[]) => messenger({username, keys}, Message.GET_DATA),
    change_by: (username: string, keys: string[], amount: number) => messenger({username, keys, amount}, Message.CHANGE_BY)
}