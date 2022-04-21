import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useDispatch, useSelector } from "react-redux";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { RootState } from "../reducer/store";
import SendIcon from "@material-ui/icons/Send";
import Box from "@material-ui/core/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Message from "../components/Message";
import { setUser,setConversation } from "../reducer/app";

import axios from "axios";
import { getConvoAPI } from "../api";

const useStyles = makeStyles({
  contacts: {
    border: "2px #ffffff solid",
    borderRadius: "35px",
    height: "80vh",
    marginTop: "50px",
    backgroundColor: "white",
  },
  chatBox: {
    border: "2px #ffffff solid",
    backgroundColor: "white",
    height: "75vh",

    padding: "5px",
    marginTop: "35px",
    marginLeft: "40px",
    borderRadius: "35px",
  },
  input: {
    marginRight: "50px",
  },
  avatar: {
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#F5F5F5",
    },
  },
  inputBox: {
    
    
    justifyContent: "flex-end",
    marginTop: "10px",
    marginLeft: "350px",
  },

  textField: {
    width: "60vh",
    backgroundColor: "white",
    borderRadius: "35px",
    border: "2px solid white",
  },
});
 
function ChatPlace(): JSX.Element {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.app.user);
  const conversation = useSelector((state: RootState) => state.app.conversation);
  const token = useSelector((state: RootState) => state.app.token);
  const [conversations, setConversations] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();
  
  
  if (!user) {
    navigate("/");
  }
 




  

  // useEffect(() => {
  //   const getConversations = async (token: string , user_id:string  ) => {
  //     const data = await getConvoAPI(token, user_id);
  //     // @ts-ignore
  //     setConversations(data);
  //   };
  //   getConversations(token , user_id);
  // }, [token]);  

  useEffect(() => { 
     

    const getConversation = async (token: string, user_id: any) => {
     
      try {
        const res = await getConvoAPI(token, user_id);
        console.log({ res })
      }
      catch (error) {
        console.log({ error })
      }
    };
    if (!user) {
      navigate("/");
    }
    else {
      const user_id= user.id
      getConversation(token , user_id)
    }
 

}, []);
  

   
       console.log({ conversation })

  console.log({token})
  console.log({ user })
    
  return (
    <>
      <Grid container spacing={4} justifyContent="center">
        <Grid item sm={5} md={3} className={classes.contacts}>
          <Typography variant="h6" gutterBottom>
            {" "}
            Messages{" "}
          </Typography>
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
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start" className={classes.avatar}>
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  alt="Travis Howard"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  alt="Cindy Baker"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  alt="Travis Howard"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} sm={6} md={7}>
          <Grid container direction="column">
            <Grid className={classes.chatBox}>
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
            </Grid>

            <Grid item sm={4} md={8}>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <Box className={classes.inputBox}>
                    <TextField
                     
                      label="Write something..."
                      
                     
                      className={classes.textField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {" "}
                            <SendIcon fontSize="small" color="primary" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ChatPlace;

