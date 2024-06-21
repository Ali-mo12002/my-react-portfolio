import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#1976d2' }}>
          Ali Mohamed Ali
        </Typography>
        <Button
          color="inherit"
          component={RouterLink}
          to="/"
          sx={{
            textTransform: 'none',
            fontWeight: location.pathname === '/' ? 'bold' : 'normal',
            color: '#1976d2',
            '&:hover': { color: '#1976d2' }  // Change color on hover
          }}
        >
          About Me
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/portfolio"
          sx={{
            textTransform: 'none',
            fontWeight: location.pathname === '/portfolio' ? 'bold' : 'normal',
            color: '#1976d2',
            '&:hover': { color: '#1976d2' }  // Change color on hover
          }}
        >
          My Portfolio
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/contact"
          sx={{
            textTransform: 'none',
            fontWeight: location.pathname === '/contact' ? 'bold' : 'normal',
            color: '#1976d2',
            '&:hover': { color: '#1976d2' }  // Change color on hover
          }}
        >
          Contact Me
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/cv"
          sx={{
            textTransform: 'none',
            fontWeight: location.pathname === '/cv' ? 'bold' : 'normal',
            color: '#1976d2',
            '&:hover': { color: '#1976e5' }  // Change color on hover
          }}
        >
          Check out my Cv
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
