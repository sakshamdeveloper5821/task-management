/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddColumnModal from './AddColumnModal';

describe('AddColumnModal', () => {
  test('renders correctly with open modal', () => {
    const handleClose = jest.fn();
    const handleAddColumn = jest.fn();

    const { getByLabelText, getByTestId } = render(
      <AddColumnModal
        open={true}
        handleClose={handleClose}
        handleAddColumn={handleAddColumn}
      />,
    );

    expect(getByLabelText('Column Name')).toBeInTheDocument();
    expect(getByTestId('modal-title')).toBeInTheDocument();
    expect(getByTestId('modal-button')).toBeInTheDocument();
  });

  test('updates input value correctly', () => {
    const handleClose = jest.fn();
    const handleAddColumn = jest.fn();

    const { getByLabelText } = render(
      <AddColumnModal
        open={true}
        handleClose={handleClose}
        handleAddColumn={handleAddColumn}
      />,
    );

    const input = getByLabelText('Column Name');

    fireEvent.change(input, { target: { value: 'New Column' } });

    expect(input.value).toBe('New Column');
  });
  describe('AddColumnModal', () => {
    test('handleAdd function is called correctly', () => {
      const handleClose = jest.fn();
      const handleAddColumn = jest.fn();

      const { getByTestId, getByLabelText } = render(
        <AddColumnModal
          open={true}
          handleClose={handleClose}
          handleAddColumn={handleAddColumn}
        />,
      );

      const input = getByLabelText('Column Name');
      const addButton = getByTestId('modal-button');

      fireEvent.change(input, { target: { value: 'New Column' } });
      fireEvent.click(addButton);

      expect(handleAddColumn).toHaveBeenCalledWith('New Column');
      expect(input.value).toBe('');
      expect(handleClose).toHaveBeenCalled();
    });
  });
});
