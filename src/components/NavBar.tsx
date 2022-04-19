import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Logo1 from "../images/logo1.png"

export default function NavBar(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="curve" style={{backgroundColor:'#373759',justifyContent:"center" , alignItems:"center" }}>
        <Toolbar>
          
        <img
                style={{ width: 100, height: 100  , objectFit: "contain" ,marginBottom:'5px'}}
                alt="logo"
            src={Logo1}
             
              />
                
            
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
