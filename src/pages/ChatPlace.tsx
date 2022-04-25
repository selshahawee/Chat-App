import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useFormik , Form} from "formik";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducer/store";
import SendIcon from "@material-ui/icons/Send";
import Box from "@material-ui/core/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Message from "../components/Message";
import Slide from '@mui/material/Slide';
import { io } from "socket.io-client";
import PropTypes from 'prop-types';
import { getConvoAPI, getMessagesAPI,sendChatMessage } from "../api";
import ConversationComp from "../components/Conversation";
import { Conversation } from "../types";
import { IconButton, useScrollTrigger } from "@mui/material";

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
    height: "80vh",
    flexWrap: "nowrap",
    overflow: "auto",
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
  const conversation = useSelector(
    (state: RootState) => state.app.conversation
  );
  const token = useSelector((state: RootState) => state.app.token);
  const [conversations, setConversations] = useState<Conversation[]>();
  const [currentChat, setCurrentChat] = useState<Conversation>();
  const [messages, setMessages] = useState([]);

  const classes = useStyles();
  const navigate = useNavigate();

  const socket = io("ws://localhost:8900")

  useEffect(() => {
    
    user && socket.emit("addUser", user.id);
    user&&socket.emit("chat message", user.id);
    socket.on("getUsers", users => {
      console.log(users)
    }
    )
  } , [] )


  
  const getConversation = async (token: string) => {
    try {
      const res = await getConvoAPI(token);
      console.log({ res });
      setConversations(res);
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    if (!token) {
      console.log({ user });
      navigate("/");
    } else {
      getConversation(token);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      body: "",
    },

    onSubmit: async (values) => {
      try {
        const data = await sendChatMessage(token, values.body, currentChat!.id);
        formik.resetForm();
        getConversation(token);
      } catch (error) {
        console.log({ error });
      }
    },
  }); 

  return (

 
    <>
      <Grid container spacing={4} justifyContent="center">
        <Grid item sm={5} md={3} className={classes.contacts}>
          <Typography variant="h6" gutterBottom>
            Messages
          </Typography>

          {conversations ? (
            conversations.length &&
            conversations.map((conversation, index) => (
              <div
                onClick={() => {
                  setCurrentChat(conversation);
                  console.log(conversation);
                }}
                key={index}
              >
                <ConversationComp conversation={conversation} />
              </div>
            ))
          ) : (
            <Typography>No Messages</Typography>
          )}
        </Grid>
        
        <Grid item xs={12} sm={6} md={7}>
          <Grid container direction="column">
          
            <Grid className={classes.chatBox}>
              {currentChat ? (
                currentChat.messages.length &&
                currentChat.messages.map((message, index) => (
                  <Message
                    message={message}
                    own={user ? user.id === message.user.id : false}
                  />
                ))
              ) : (
                <Typography>No Chat</Typography>
              )}
            </Grid>
          
            <Grid item sm={4} md={8}>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <Box
                    component="form"
                    
                    // as="form"
                    onSubmit={(e) =>
                      formik.handleSubmit(e as React.FormEvent<HTMLFormElement>)
                    }
                    // onSubmit={formik.handleSubmit}
                    className={classes.inputBox}
                  >
                    <TextField
                      name="body"
                      onChange={formik.handleChange}
                      value={formik.values.body}
                      autoFocus
                      label="Write something..."
                      className={classes.textField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton type="submit">
                              <SendIcon fontSize="small" color="primary" />
                            </IconButton>
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
