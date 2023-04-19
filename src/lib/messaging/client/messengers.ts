import {authMessengers} from "./auth-messengers";
import {dataMessengers} from "./data-messengers";
import {mailMessengers} from "./mail-messengers";

// finally you can collect all messenger factories in one place
export const messengers = {
	auth: {...authMessengers},
	data: {...dataMessengers},
	mail: {...mailMessengers}
};