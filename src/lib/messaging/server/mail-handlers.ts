import { respond, ServerTypes } from "@affinity-lab/sk-messaging";
import {Message} from "../message";
import {Status} from "../status";
import {reform} from "reformdata";
import fs from "fs";
import {randomID} from "./randomId";

let userdata_path:string = "src/lib/messaging/server/userdata.json";
let userdata = JSON.parse(fs.readFileSync(userdata_path));

let mails_path:string = "src/lib/messaging/server/userdata.json";
let mails = JSON.parse(fs.readFileSync(mails_path));

function updateData () {
    fs.writeFile(userdata_path, JSON.stringify(userdata, null, 4),
        (err)=>{if (err) console.log(err);}
    );
    fs.writeFile(mails_path, JSON.stringify(mails, null, 4),
        (err)=>{if (err) console.log(err);}
    );
}


const mailHandlers: ServerTypes.MessageHandlerCollection = {};

mailHandlers[Message.MAIL_SEND] = (event, formdata) => {
    let data = reform<{username:string, title:string, recipient:string, content:string}>(formdata as FormData);

    let response;
    if (Object.keys(userdata).includes(data.recipient)) {
        let id = randomID(8);
        mails[id] = {
            SENDER: data.username,
            RECIPIENT: data.recipient,
            TITLE: data.title,
            CONTENT: data.content
        }
        updateData();
        response = respond(Status.OK);
    } else {
        response = respond(Status.NOT_FOUND);
    }
    //let response = respond(Status.UNAUTHORIZED);
    console.log("Was here", response);
    return response;
}

export default mailHandlers;