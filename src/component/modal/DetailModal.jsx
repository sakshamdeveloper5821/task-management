import React from 'react';
import Modal from '@mui/material/Modal';
const DetailModal = ({ open, handleClose, details, index }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          background: 'white',
          minWidth: '400px',
          padding: '10px',
        }}
      >
        <h2>Task Details</h2>

        <div key={index} data-testid="Task-Details">
          <div>Name : {details[index].Name}</div>
          <div>Deadline :{details[index].Deadline}</div>
          <div
            style={{ maxHeight: '100px', overflowY: 'auto', display: 'flex' }}
          >
            Description : {details[index].Description}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailModal;
