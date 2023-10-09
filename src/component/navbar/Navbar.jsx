import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <div className="container">
        <div>
          <Typography variant="h6">Task Manager</Typography>
        </div>
        <div>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
