// import React from 'react';
// function PopupMessage({ onClose, onDelete, onEdit }) {
//   const handleDelete = () => {
//     if (typeof onDelete === 'function') {
//       onDelete(); // Call the delete function
//     }
//     onClose(); // Close the popup
//   };
//   const handleEdit = () => {
//     if (typeof onEdit === 'function') {
//       onEdit(); // Call the delete function
//     }
//     onClose(); // Close the popup
//   };
//   return (
//     <PopDiv className="popup-message">
//       <PopDiv className="popup-content">
//         <EditDeleteButton onClick={handleEdit}>Edit</EditDeleteButton>
//         <br />
//         <EditDeleteButton onClick={handleDelete}>Delete</EditDeleteButton>
//         <br />
//         <EditDeleteButton onClick={onClose}>Close</EditDeleteButton>
//       </PopDiv>
//     </PopDiv>
//   );
// }

// export default PopupMessage;
/* eslint-disable */

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { EditDeleteButton, PopDiv } from './Home.style';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

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
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <EditDeleteButton onClick={handleEdit} disableRipple>
          <EditIcon />
          Edit
        </EditDeleteButton>
        <EditDeleteButton onClick={handleDelete} disableRipple>
          <FileCopyIcon />
          Delete
        </EditDeleteButton>
        <Divider sx={{ my: 0.5 }} />
      </StyledMenu>
    </div>
  );
}