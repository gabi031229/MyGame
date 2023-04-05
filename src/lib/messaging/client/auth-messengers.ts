import {messenger} from "./messenger";
import {Message} from "../message";

// you should organize your messenger factory calls in an object
export const authMessengers = {
	login: (name: string, password: string) => messenger({name, password}, Message.AUTH_LOGIN)
}