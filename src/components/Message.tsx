import "../styles/Message.css";
import { format } from "timeago.js";
import React from "react";
import { Message } from "../types";
export default function MessageComp({ message, own = false }: { message: Message, own?: boolean }) { 
  
 

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={message.user.image}
          alt=""
        />
              <p className="messageText">{message.body} 
              </p>
      </div>
      <div className="messageBottom">{format(message.created_at)}</div>
    </div>
  );
}