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
import { io, Socket } from "socket.io-client";
import { getConvoAPI, getMessagesAPI,sendChatMessage } from "../api";
import ConversationComp from "../components/Conversation";
import { Conversation } from "../types";
import { IconButton} from "@mui/material";

const useStyles = makeStyles({
  contacts: {
    border: "2px #ffffff solid",
    borderRadius: "35px",
    height: "80vh",
    overflow:"auto",
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
    // marginLeft: "40px",
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
    // justifyContent: "flex-end",
    marginTop: "10px",
    // marginLeft: "350px",
  },
  inputBoxGrid:{
    flexGrow: 1,
  },

  textField: {
    // width: "60vh",
    backgroundColor: "white",
    borderRadius: "35px",
    border: "2px solid white",
  },
});

function ChatPlace(): JSX.Element {

  
  
  const user = useSelector((state: RootState) => state.app.user);
  const conversation = useSelector(
    (state: RootState) => state.app.conversation
  );
  const token = useSelector((state: RootState) => state.app.token);
  const [conversations, setConversations] = useState<Conversation[]>();
  const [currentChat, setCurrentChat] = useState<Conversation>();
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState<Socket>(io('http://localhost:7070/'));
  const classes = useStyles();
  const navigate = useNavigate();


  


 

  useEffect(() => {
    socket.on("updateMessages", (data) => {
      setCurrentChat((curr) => {
        if (curr) {
          console.log({ curr });
          return { ...curr, messages: [...curr.messages, data] };
        }
      });
    });
  
  } , [socket] )


  
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
        if (currentChat && user) {
          const data = await sendChatMessage(token, values.body, currentChat.id);
          socket.emit("privateMessage", {
            message: values.body,
            userId: user.id,
            conversationId: currentChat.id,
          });
          formik.resetForm();
          getConversation(token);
        }
      } catch (error) {
        console.log({ error });
      }
    },
  }); 

  return (
    <>
      <Grid container spacing={4} justifyContent="center">
        <Grid item sm={false} md={1} />
        <Grid item xs={3} sm={6} md={4} className={classes.contacts}>
          <Typography variant="h6" gutterBottom>
            Messages
          </Typography>

          {conversations ? (
            conversations.length &&
            conversations.map((conversation, index) => (
              <div
                onClick={() => {
                  setCurrentChat(conversation);
                  socket.emit('joinConversation', conversation.id);
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

        <Grid item xs={9} sm={6} md={6}>
          <Grid container direction="column">
            <Grid item className={classes.chatBox}>
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

            <Grid item>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item className={classes.inputBoxGrid}>
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
                      fullWidth
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
        <Grid item sm={false} md={1} />
      </Grid>
    </>
  );
}


export default ChatPlace;
