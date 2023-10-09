/* eslint-disable no-undef */
// Card.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  // ... previous tests

  test('calls handleDeleteTask when "Delete" button is clicked', () => {
    const tasks = [
      {
        Name: 'Task 1',
        Deadline: '2023-10-20',
        Description: 'This is the description for Task 1',
      },
    ];

    const handleDetailModalOpen = jest.fn();
    const handleDeleteTask = jest.fn();
    const handleOpen = jest.fn();
    const setNewTask = jest.fn();
    const setEditingTask = jest.fn();

    const { getByText } = render(
      <Card
        tasks={tasks}
        handleDetailModalOpen={handleDetailModalOpen}
        handleDeleteTask={handleDeleteTask}
        handleOpen={handleOpen}
        setNewTask={setNewTask}
        setEditingTask={setEditingTask}
      />,
    );

    fireEvent.click(getByText('Delete'));

    expect(handleDeleteTask).toHaveBeenCalledWith(0);
  });

  test('calls handleOpen, setNewTask, and setEditingTask when "Edit" button is clicked', () => {
    const tasks = [
      {
        Name: 'Task 1',
        Deadline: '2023-10-20',
        Description: 'This is the description for Task 1',
      },
    ];

    const handleDetailModalOpen = jest.fn();
    const handleDeleteTask = jest.fn();
    const handleOpen = jest.fn();
    const setNewTask = jest.fn();
    const setEditingTask = jest.fn();

    const { getByText } = render(
      <Card
        tasks={tasks}
        handleDetailModalOpen={handleDetailModalOpen}
        handleDeleteTask={handleDeleteTask}
        handleOpen={handleOpen}
        setNewTask={setNewTask}
        setEditingTask={setEditingTask}
      />,
    );

    fireEvent.click(getByText('Edit'));

    expect(handleOpen).toHaveBeenCalledWith(true);
    expect(setNewTask).toHaveBeenCalledWith(tasks[0]);
    expect(setEditingTask).toHaveBeenCalledWith(0);
  });
  test('calls handleDetailModalOpen when "Click here to view details..." is clicked', () => {
    const tasks = [
      {
        Name: 'Task 1',
        Deadline: '2023-10-20',
        Description: 'This is the description for Task 1',
      },
    ];

    const handleDetailModalOpen = jest.fn();
    const handleDeleteTask = jest.fn();
    const handleOpen = jest.fn();
    const setNewTask = jest.fn();
    const setEditingTask = jest.fn();

    const { getByText } = render(
      <Card
        tasks={tasks}
        handleDetailModalOpen={handleDetailModalOpen}
        handleDeleteTask={handleDeleteTask}
        handleOpen={handleOpen}
        setNewTask={setNewTask}
        setEditingTask={setEditingTask}
      />,
    );

    fireEvent.click(getByText('Click here to view details...'));

    expect(handleDetailModalOpen).toHaveBeenCalledWith(0);
  });
});
