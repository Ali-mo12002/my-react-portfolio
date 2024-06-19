import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', p: 2 }}>
      <BottomNavigation>
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
        <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
