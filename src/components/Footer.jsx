import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', p: 2 }}>
      <BottomNavigation>
        <BottomNavigationAction
          label="GitHub"
          icon={<GitHubIcon />}
          href="https://github.com/Ali-mo12002"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            '&:hover': {
              bgcolor: '#1976d2',
              color: 'white', // Optional: to change the icon color to white on hover
            },
          }}
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/ali-m-574056289/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            '&:hover': {
              bgcolor: '#1976d2',
              color: 'white', // Optional: to change the icon color to white on hover
            },
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
