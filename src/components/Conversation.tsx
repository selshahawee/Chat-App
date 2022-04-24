import React, { useState } from 'react'
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Avatar, Divider, ListItem, ListItemText, Typography } from '@mui/material';
import { RootState } from '../reducer/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FireExtinguisherRounded } from '@mui/icons-material';
const useStyles = makeStyles({
    
    avatar: {
      cursor: "pointer",
    "&:hover": {
        backgroundColor: "#F5F5F5",
      },
   
    },
}); 

  

function Conversation({conversation  } : {conversation: any} ): JSX.Element  {
    const classes = useStyles();
 const user = useSelector((state: RootState) => state.app.user);

    
  return (
      <div>
          <List>
            <ListItem alignItems="flex-start" className={classes.avatar}>
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary={conversation.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                    {conversation.messages[0].body}
                    </Typography>
                    
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
           
          </List>
    </div>
  )
}

export default Conversation