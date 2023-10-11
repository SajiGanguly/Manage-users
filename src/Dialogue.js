import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';
import SelectVariants from './UserRole';

const UserRolesFormModal = ({ open, onClose }) => {
  const [userRole, setUserRole] = useState('');

  const handleClose = () => {
    setUserRole(''); // Clear the input field when the modal is closed
    onClose();
  };

  const handleSave = () => {
    // Add logic to save the user role here (e.g., sending a request to the server)
    // After saving, you can close the modal
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add User Role</DialogTitle>
      <DialogContent>
        
        
        <SelectVariants/>
          
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserRolesFormModal;
