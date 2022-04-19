import React from 'react';
import "../styles/TopBar.css";
import {  Person, Chat, Notifications } from "@mui/icons-material";




export default function Topbar(): JSX.Element {


//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
       
      </div>
      
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        
          <img
            // src={
            //   user.profilePicture
            //     ? PF + user.profilePicture
            //     : PF + "person/noAvatar.png"
            // }
            alt=""
            className="topbarImg"
          />
      
      </div>
    </div>
  );
}
