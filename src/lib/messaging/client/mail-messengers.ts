import {messenger} from "./messenger";
import {Message} from "../message";

function sendMail(username: string, title:string, recipient:string, content:string) {
    console.log(username, title, recipient, content);
    return messenger({username, title, recipient, content}, Message.MAIL_SEND);
}

export const mailMessengers = {
    send: sendMail
}