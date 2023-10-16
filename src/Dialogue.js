import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const UserRolesFormModal = ({ open, onClose }) => {
  // Add your dialog content and logic here

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>User Roles</DialogTitle>
      <DialogContent>
        {/* Add content for user roles here */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserRolesFormModal;
