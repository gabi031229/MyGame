import { respond, ServerTypes } from "@affinity-lab/sk-messaging";
import {Message} from "../message";
import {Status} from "../status";
import {reform} from "reformdata";
//import {respond, ServerTypes} from "../../../../index";

// you need to create a MessageHandlerCollection
const authHandlers: ServerTypes.MessageHandlerCollection = {};

// and create handler methods for all your messages
authHandlers[Message.AUTH_LOGIN] = (event, formdata) => {
	// the handler method gets the RequestEvent, and FormData as argument
	let data = reform<{login:string, password:string}>(formdata as FormData)
	console.log(data.login)
	// the handler must return a 200 OK JSON ({status:string|number, message:any}) response
	// the "respond" function can create you one
	let response = respond(Status.OK, "hello");
	// you can set headers of the response
	response.headers.set("myheader", "myvalue");
	// and you can set cookies as well
	event.cookies.set("mycookie", "myvalue", {path: "/"})
	return response;
}

export default authHandlers;