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



import { getConvoAPI } from "../api";
import Conversations from "../components/conversations";

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
     

    const getConversation = async (token: string, user_id: string) => {
     
      try {
        const res = await getConvoAPI(token, user_id);
        console.log({ res })
        setConversations(res.conversations)
          console.log(res.conversations)
      }
      catch (error) {
        console.log({ error })
      }
    };
    if (!user) {
      navigate("/");
    }
    else {
      const user_id: string = user.id!
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
          {conversations.map((conversation) => (
          <Conversations conversation={conversation} />
          ))}
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

