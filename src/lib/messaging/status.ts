//import {DefaultResponseStatus} from "../../../index";

import { DefaultResponseStatus } from "@affinity-lab/sk-messaging";

// there are some default response statuses defined in "DefaultResponseStatus" enum,
// but you can extend those if needed. Both server and client side uses these statuses

enum MyResponseStatus {
	SUCCESS,
	FAILURE
}

export const Status = {
	...DefaultResponseStatus,
	...MyResponseStatus
}