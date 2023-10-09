/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from './Board';
describe('Board Component', () => {
  it('Renders the Board component', () => {
    const { getByText } = render(<Board />);
    expect(getByText('Task Board')).toBeInTheDocument();
  });

  it('Adds a column', () => {
    const { getByTestId, getByLabelText } = render(<Board />);
    fireEvent.click(getByTestId('add-column-button'));
    fireEvent.change(getByLabelText('Column Name'), {
      target: { value: 'New Column' },
    });
    fireEvent.click(getByTestId('modal-button'));
  });

  it('Adds a task', () => {
    const { getByText, getByLabelText, getByTestId } = render(<Board />);
    fireEvent.click(getByText('Create Task +'));
    fireEvent.change(getByLabelText('Task'), { target: { value: 'New Task' } });
    fireEvent.change(getByLabelText('Deadline'), {
      target: { value: '2023-10-20' },
    });
    fireEvent.change(getByLabelText('Description'), {
      target: { value: 'Task Description' },
    });
    fireEvent.click(getByTestId('AddTaskBtn'));
    expect(getByTestId('taskname')).toBeInTheDocument();
  });

  it('Edits a task', () => {
    const { getByText, getByTestId, getByLabelText } = render(<Board />);
    fireEvent.click(getByTestId('edit-task-button'));
    fireEvent.change(getByLabelText('Task'), {
      target: { value: 'Edited Task' },
    });
    fireEvent.click(getByText('Save Changes'));
    expect(getByTestId('taskname')).toBeInTheDocument();
  });
  it('Deletes a task', () => {
    const { getByTestId, queryByText } = render(<Board />);
    fireEvent.click(getByTestId('delete-task-button'));
    expect(queryByText('Edited Task')).toBeNull();
  });
  it('Views task details', () => {
    const { getByTestId } = render(<Board />);
    fireEvent.click(getByTestId('view-details-button'));
    expect(getByTestId('Task-Details')).toBeInTheDocument();
  });
});
