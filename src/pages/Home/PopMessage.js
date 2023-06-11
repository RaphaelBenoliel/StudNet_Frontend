/* eslint-disable */

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { PopDiv, EditDeleteButton } from './Home.style';

export default function PopupMessage({ onClose, onDelete, onEdit }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    if (typeof onDelete === 'function') {
      onDelete(); // Call the delete function
    }
    onClose(); // Close the popup
  };
  const handleEdit = () => {
    if (typeof onEdit === 'function') {
      onEdit(); // Call the delete function
    }
    onClose(); // Close the popup
  };

  return (
    <PopDiv>
      <EditDeleteButton
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        •••
      </EditDeleteButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </PopDiv>
  );
}