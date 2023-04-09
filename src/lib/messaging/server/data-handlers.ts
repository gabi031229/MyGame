import { respond, ServerTypes } from "@affinity-lab/sk-messaging";
import {Message} from "../message";
import {Status} from "../status";
import {reform} from "reformdata";
import fs from "fs";

let path:string = "./userdata.json";
let userdata: object;
userdata = JSON.parse(fs.readFileSync(path));

function updateData () {fs.writeFile(path, JSON.stringify(userdata, null, 4), (err)=>{
    if (err) console.log(err);
});}

// you need to create a MessageHandlerCollection
const dataHandlers: ServerTypes.MessageHandlerCollection = {};

// and create handler methods for all your messages
dataHandlers[Message.GET_DATA] = (event, formdata) => {
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
    return response;
}

dataHandlers[Message.CHANGE_BY] = (event, formdata) => {
    let data = reform<{username:string, keys:string[], amount:string}>(formdata as FormData);

    let path: string[] = [data.username, ...data.keys];
    let p: string[] = path.slice(0,-1);
    let last: string = path.slice(-1)[0];
    let key: string;
    let data_copy: object = userdata;
    while(p.length > 0) {
        key = p.shift();
        data_copy = data_copy[key];
    }
    data_copy[last] += parseInt(data.amount);

    //userdata[data.username][data.keys[0]][data.keys[1]] += data.amount;
    userdata[data.username]["SKILL_POINTS"] -= parseInt(data.amount);

    updateData();
    return respond(Status.OK);
}

export default dataHandlers;