import "../styles/Message.css";
import { format } from "timeago.js";
import React from "react";
export default function Message ({  own=false }: { own?: boolean })  { 

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
              <p className="messageText">Lorem ipsum dolor sit amet consectetur 
              </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}