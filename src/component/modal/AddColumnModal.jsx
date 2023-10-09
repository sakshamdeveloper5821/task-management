import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddColumnModal = ({ open, handleClose, handleAddColumn }) => {
  const [newColumn, setNewColumn] = useState('');
  const handleAdd = () => {
    handleAddColumn(newColumn);
    setNewColumn('');
    handleClose();
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          background: 'white',
          minWidth: '400px',
          padding: '10px',
        }}
      >
        <h2 data-testid="modal-title">Add Column</h2>
        <TextField
          label="Column Name"
          variant="outlined"
          fullWidth
          value={newColumn}
          onChange={(e) => setNewColumn(e.target.value)}
        />
        <Button
          data-testid="modal-button"
          variant="contained"
          color="primary"
          onClick={handleAdd}
          style={{ marginTop: '16px' }}
        >
          Add Column
        </Button>
      </div>
    </Modal>
  );
};

export default AddColumnModal;
