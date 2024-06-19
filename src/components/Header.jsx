import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ali Mohamed Ali
        </Typography>
        <Button color="inherit" component={RouterLink} to="/" sx={{ textTransform: 'none', fontWeight: location.pathname === '/' ? 'bold' : 'normal' }}>
          About Me
        </Button>
        <Button color="inherit" component={RouterLink} to="/portfolio" sx={{ textTransform: 'none', fontWeight: location.pathname === '/portfolio' ? 'bold' : 'normal' }}>
          Portfolio
        </Button>
        <Button color="inherit" component={RouterLink} to="/contact" sx={{ textTransform: 'none', fontWeight: location.pathname === '/contact' ? 'bold' : 'normal' }}>
          Contact
        </Button>
        <Button color="inherit" component={RouterLink} to="/resume" sx={{ textTransform: 'none', fontWeight: location.pathname === '/resume' ? 'bold' : 'normal' }}>
          Resume
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
