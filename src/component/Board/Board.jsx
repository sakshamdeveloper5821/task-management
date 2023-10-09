import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import './Board.css';
import AddColumnModal from '../modal/AddColumnModal';
import DetailModal from '../modal/DetailModal';
import Card from '../card/Card';

const Board = () => {
  const [open, setOpen] = useState(false);
  const [moreDetails, setMoreDetails] = useState(false);
  const [columnModalOpen, setColumnModalOpen] = useState(false);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [],
  );
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [column, setColumn] = useState([]);
  const [newdeadline, setNewDeadline] = useState('');
  const [newdescription, setNewDescription] = useState('');
  const [id, setId] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleColumnModalOpen = () => {
    setColumnModalOpen(true);
  };
  const handleColumnModalClose = () => {
    setColumnModalOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDetailModalOpen = (index) => {
    setId(index);
    setMoreDetails(true);
  };
  const handleDetailModalClose = () => {
    setMoreDetails(false);
  };
  const handleAddColumn = (newColumn) => {
    setColumn([...column, newColumn]);
  };
  const handleAddTask = () => {
    const combinedValues = {
      Name: newTask,
      Deadline: newdeadline,
      Description: newdescription,
    };
    setTasks([...tasks, combinedValues]);
    setNewTask('');
    setNewDeadline('');
    setNewDescription('');
    handleClose();
    localStorage.setItem('tasks', JSON.stringify([...tasks, combinedValues]));
  };
  const handleEditTask = () => {
    if (editingTask !== null) {
      const updatedTasks = tasks.map((task, index) => {
        if (index === editingTask) {
          return {
            Name: newTask,
            Deadline: newdeadline,
            Description: newdescription,
          };
        }
        return task;
      });
      setTasks(updatedTasks);
      setNewTask('');
      setNewDeadline('');
      setNewDescription('');
      setEditingTask(null);
      handleClose();
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Task Board</h2>
      <Grid item xs={4}>
        <Button
          data-testid="add-column-button"
          variant="outlined"
          onClick={handleColumnModalOpen}
          style={{ marginBottom: '16px' }}
        >
          Add Column +
        </Button>
        {columnModalOpen && (
          <AddColumnModal
            open={columnModalOpen}
            handleClose={handleColumnModalClose}
            handleAddColumn={handleAddColumn}
          />
        )}
      </Grid>
      <div className="boardcontainer">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {moreDetails && (
              <DetailModal
                open={moreDetails}
                handleClose={handleDetailModalClose}
                details={tasks}
                index={id}
              />
            )}
            <Paper elevation={3} style={{ padding: '16px', minHeight: '85vh' }}>
              <h3>To Do</h3>
              <Card
                tasks={tasks}
                handleDetailModalOpen={handleDetailModalOpen}
                handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask}
                handleOpen={setOpen}
                setNewTask={setNewTask}
                setEditingTask={setEditingTask}
              />
              <Button variant="outlined" onClick={handleOpen}>
                Create Task +
              </Button>
            </Paper>
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
                <h2>{editingTask !== null ? 'Edit Task' : 'Add Task'}</h2>
                <TextField
                  label="Task"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <TextField
                  label="Deadline"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setNewDeadline(e.target.value)}
                  style={{ marginTop: '16px' }}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  onChange={(e) => setNewDescription(e.target.value)}
                  style={{ marginTop: '16px' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  data-testid="AddTaskBtn"
                  onClick={
                    editingTask !== null ? handleEditTask : handleAddTask
                  }
                  style={{ marginTop: '16px' }}
                >
                  {editingTask !== null ? 'Save Changes' : 'Add Task'}
                </Button>
              </div>
            </Modal>
          </Grid>
          {column.map((column, index) => {
            return (
              <Grid key={index} item xs={4}>
                <Paper
                  elevation={3}
                  style={{ padding: '16px', minHeight: '85vh' }}
                >
                  <h3>{column}</h3>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Board;
