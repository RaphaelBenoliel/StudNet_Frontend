/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip  } from '@mui/material';
import {PersonAdd, Settings, Logout} from '@mui/icons-material';
import { UserPicture } from '../Home/Home.style';

export default function AccountMenu({ auth, signOut }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    const { id } = event.currentTarget;
  if (auth) {
    if (id === 'personal-area') {
      navigate('/my-area');
    }
    if (id === 'profile') {
      navigate('/profile');
    }}
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <UserPicture src={JSON.parse(auth).picture} alt="User Profile" />
            {/* <Avatar sx={{ width: 32, height: 32 }}>RA</Avatar> */}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            background: 'rgb(36 40 45)',
            color: 'white',
            borderRadius: '10px',
            mt: 1.5,
            '& .MuiMenuItem-root:hover': {
              background: 'rgba(0, 250, 48, 0.20)'
            },
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'rgb(36 40 45)',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem id="profile" onClick={handleClose}>
          <Avatar />
          {JSON.parse(auth).firstName} {JSON.parse(auth).lastName}
        </MenuItem>
        <MenuItem id="personal-area" onClick={handleClose}>
          <Avatar />
         Personal Area
        </MenuItem>
        <Divider />
        <MenuItem id="personal-area" onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={signOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
