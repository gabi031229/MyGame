import { respond, ServerTypes } from "@affinity-lab/sk-messaging";
import {Message} from "../message";
import {Status} from "../status";
import {reform} from "reformdata";
import userdata from "./userdata.json";

// you need to create a MessageHandlerCollection
const dataHandlers: ServerTypes.MessageHandlerCollection = {};

// and create handler methods for all your messages
dataHandlers[Message.GET_DATA] = (event, formdata) => {
    // the handler method gets the RequestEvent, and FormData as argument
    let data = reform<{username:string, keys:string[]}>(formdata as FormData);

    let response = respond(Status.NOT_FOUND);
    let returnData;
    if (Object.keys(userdata).includes(data.username)) {
        // @ts-ignore
        returnData = userdata[data.username];
    } else return response;

    while (data.keys.length > 0) {
        if (Object.keys(returnData).includes(data.keys[0])) {
            returnData = returnData[data.keys[0]];
            data.keys.shift();
        } else return response;
    }
    response = respond(Status.OK, returnData);
    // the handler must return a 200 OK JSON ({status:string|number, message:any}) response
    // the "respond" function can create you one

    //response.headers.set("myheader", "myvalue");
    //event.cookies.set("mycookie", "myvalue", {path: "/"})
    return response;
}

export default dataHandlers;