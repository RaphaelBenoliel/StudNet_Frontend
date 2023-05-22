import React from 'react';
import { EditDeleteButton, PopDiv } from './Home.style';

function PopupMessage({ onClose, onDelete, onEdit }) {
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
    <PopDiv className="popup-message">
      <PopDiv className="popup-content">
        <EditDeleteButton onClick={handleEdit}>Edit</EditDeleteButton>
        <br />
        <EditDeleteButton onClick={handleDelete}>Delete</EditDeleteButton>
        <br />
        <EditDeleteButton onClick={onClose}>Close</EditDeleteButton>
      </PopDiv>
    </PopDiv>
  );
}

export default PopupMessage;
