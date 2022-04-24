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
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
              <p className="messageText">{message.body} 
              </p>
      </div>
      <div className="messageBottom">{message.created_at}</div>
    </div>
  );
}