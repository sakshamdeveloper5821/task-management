import React from 'react';
import Button from '@mui/material/Button';

const Card = ({
  tasks,
  handleDetailModalOpen,
  handleDeleteTask,
  handleOpen,
  setNewTask,
  setEditingTask,
}) => {
  return (
    <>
      {tasks.map((task, index) => (
        <div className="createdTask" key={index}>
          <div className="taskdetails">
            <div data-testid="taskname">Name : {task?.Name}</div>
            <div>Deadline :{task?.Deadline}</div>
            <div className="desc">
              <span> Description </span> :{' '}
              <span data-testid="description">
                {task?.Description && task?.Description.slice(0, 20)}...
              </span>
            </div>
          </div>
          <div>
            <p
              style={{ cursor: 'pointer' }}
              onClick={() => handleDetailModalOpen(index)}
              data-testid="view-details-button"
            >
              Click here to view details...
            </p>
          </div>
          <div className="btndiv">
            <Button
              data-testid="edit-task-button"
              variant="outlined"
              style={{ marginLeft: '10px' }}
              onClick={() => {
                handleOpen(true);
                setNewTask(task);
                setEditingTask(index);
              }}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              style={{ marginLeft: '10px' }}
              onClick={() => handleDeleteTask(index)}
              data-testid="delete-task-button"
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
