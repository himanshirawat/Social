import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from '@mui/material';
import FaceBookIcon from '@mui/icons-material/Facebook';
import auth from '../auth/auth-helper';
import HomeIcon from '@mui/icons-material/Home';
import { Link,withRouter} from 'react-router-dom';


const isActive = (history, path) => {
  if (history.location.pathname == path) return { color: '#024d63' };
  else return { color: '#ffffff' };
};
const Menu = withRouter(({ history }) => (
  <AppBar position="static">
    <Toolbar>
      <FaceBookIcon />
      <Typography variant="h6" color="inherit">
        facebook
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, '/')}>
          <HomeIcon />
        </IconButton>
      </Link>
      {!auth.isAuthenticated() && (
        <span>
          <Link to="/signup">
            <Button style={isActive(history, '/signup')}>Sign up</Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, '/signin')}>Sign In</Button>
          </Link>
        </span>
      )}
      {auth.isAuthenticated() && (
        <span>
          <Link to={'/user/' + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, '/user/' + auth.isAuthenticated().user._id)}>My Profile</Button>
          </Link>
          <Button
            color="inherit"
            onClick={() => {
              auth.clearJWT(() => history.push('/'));
            }}
          >
            Sign out
          </Button>
        </span>
      )}
    </Toolbar>
  </AppBar>
));



export default Menu;