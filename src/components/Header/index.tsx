import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

export default function Header() {
  const handleClick = () => {
    window.location.pathname = '';
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'var(--primary-color)' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <HomeIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={handleClick}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }}
          >
            MOVIEAPP
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
