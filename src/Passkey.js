import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers ,faKey as faGoPasskeyFill} from '@fortawesome/free-solid-svg-icons';
import AppBar from '@mui/material/AppBar';
import { CardActionArea , FormControl, InputLabel, Input, IconButton, InputAdornment, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import herculeLogoNew from "./herculeLogoNew.png";

function ResponsiveDrawer(props) {
   
  const colorfulIconStyle = {
    color: '#66ccf1', // You can change the color to any color you like
  };
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const divStyle = {
    margin: '0 auto',
    borderRadius: '70px',
  };
  const cardStyle = {
    width: '500px', // Increase the width
     // Set a maximum width
    borderRadius: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    backgroundColor: '#fff', // Background color
  };
  const pageCenterStyle = {
    backgroundColor:"#E0FFFF",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const buttonStyle = {
    backgroundColor: '#20A0D8', // Background color
    color: '#fff', // Text color
    margin: '10px', // Margin around the buttons
    borderRadius: '5px', // Rounded corners
    padding: '10px 23px', // Padding
    fontSize: '12px', // Font size
    cursor: 'pointer',
    alignItems:"center", // Change cursor on hover
  };

  const buttonContainer = {
    display:"flex",
  }
  return (
   
    <div style={pageCenterStyle}>
      
      <AppBar position="fixed">
        <Toolbar style={{ paddingLeft: '20px',  backgroundColor:"#20A0D8" }}>
          <div>
          <img src={herculeLogoNew} alt="Hercule Logo" style={{ width: '150px', height: 'auto' }} />
          </div>
        <Typography variant="h3" noWrap component="div" style={{fontFamily: "Source Sans Pro", }}>
           Passkey Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <main style={{ padding: '15px' }}>
       <Toolbar/>
       <div >
        <div style={{ display: 'flex', justifyContent: 'flex-start' }} >
       <div style={divStyle}>
        <Card  sx={cardStyle}>
          <CardActionArea>
          <Typography gutterBottom variant="h6" component="div" style={{fontFamily: "Source Sans Pro",paddingTop:"40px"}}>
                Generate Your Passkey:
              </Typography>
            <CardContent>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
<InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
<Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
<InputAdornment position="end">
<IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
</IconButton>
</InputAdornment>
            }
          />
</FormControl>
              <Typography variant="h6" component="div" style={{fontFamily: "Source Sans Pro"}}>
                <div style={buttonContainer}>
                <Button style={buttonStyle}>
                  Generate
                </Button>
                <Button style={buttonStyle}>
                  update
                </Button>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
          
        </Card>
        </div>
        
          </div>
          </div>
      </main>
      </div>
  
    
  );
}

ResponsiveDrawer.propTypes = { 
  window: PropTypes.func,
};

export default ResponsiveDrawer;
