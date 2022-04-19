import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import Topbar from "../components/TopBar";
import SendIcon from "@material-ui/icons/Send";
import Box from "@material-ui/core/Box";
import InputAdornment from "@mui/material/InputAdornment";
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
  
}
 
});

function ChatPlace() {
  const classes = useStyles();

  return (
    <>
      <Topbar />
      <Grid container spacing={4} justifyContent="center">
        <Grid item  sm={5} md={3} className={classes.contacts}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "backgroundPaper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
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
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
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
                  alt="Cindy Baker"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
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
                  alt="Travis Howard"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
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

        <Grid item xs={12} sm={6}md={7}>
          <Grid container direction="column">
            <Grid className={classes.chatBox}>
              <List>
                <ListItem key="1">
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemIcon style={{ float: "right" }}>
                        <Avatar
                          alt="Remy Sharp"
                          src="https://material-ui.com/static/images/avatar/1.jpg"
                        />
                      </ListItemIcon>
                      <ListItemText
                        style={{ textAlign: "right" }}
                        primary="Hey man, What's up ?"
                      ></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText
                        style={{ textAlign: "right" }}
                        secondary="09:30"
                      ></ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem key="2">
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemText
                        style={{ textAlign: "left" }}
                        primary="Hey, Iam Good! What about you ?"
                      ></ListItemText>
                      <ListItemIcon>
                        <Avatar
                          alt="Alice"
                          src="https://material-ui.com/static/images/avatar/3.jpg"
                        />
                      </ListItemIcon>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText
                        style={{ textAlign: "left" }}
                        secondary="09:31"
                      ></ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem key="3">
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemText
                        style={{ textAlign: "right" }}
                        primary="Cool. i am good, let's catch up!"
                      ></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText
                        style={{ textAlign: "right" }}
                        secondary="10:30"
                      ></ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Grid>

            <Grid item sm={4} md={8} >
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "70%",
                      borderRadius: "35px",
                      border: "2px solid white",
                      backgroundColor: "white",
                      justifyContent: "flex-end",
                      marginTop: "10px",
                    marginLeft: "350px"}}
                  >
                    <TextField
                      fullWidth
                      label="Message"
                      id="fullWidth"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {" "}
                            <Fab color="primary" aria-label="add">
                              <SendIcon />
                            </Fab>
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
