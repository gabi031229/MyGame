import {authMessengers} from "./auth-messengers";
import {dataMessengers} from "./data-messengers";

// finally you can collect all messenger factories in one place
export const messengers = {
	auth: {...authMessengers},
	data: {...dataMessengers}
};