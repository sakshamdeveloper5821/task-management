/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import DetailModal from './DetailModal';

describe('DetailModal', () => {
  test('renders correctly with open modal', () => {
    const handleClose = jest.fn();
    const details = [
      {
        Name: 'Task 1',
        Deadline: '2023-10-20',
        Description: 'This is the description for Task 1',
      },
    ];
    const index = 0;

    const { getByText } = render(
      <DetailModal
        open={true}
        handleClose={handleClose}
        details={details}
        index={index}
      />,
    );

    expect(getByText('Task Details')).toBeInTheDocument();
    expect(getByText('Name : Task 1')).toBeInTheDocument();
    expect(getByText('Deadline :2023-10-20')).toBeInTheDocument();
    expect(
      getByText('Description : This is the description for Task 1'),
    ).toBeInTheDocument();
  });

  test('does not render when modal is closed', () => {
    const handleClose = jest.fn();
    const details = [
      {
        Name: 'Task 1',
        Deadline: '2023-10-20',
        Description: 'This is the description for Task 1',
      },
    ];
    const index = 0;

    const { queryByText } = render(
      <DetailModal
        open={false}
        handleClose={handleClose}
        details={details}
        index={index}
      />,
    );

    expect(queryByText('Task Details')).toBeNull();
    expect(queryByText('Name : Task 1')).toBeNull();
    expect(queryByText('Deadline :2023-10-20')).toBeNull();
    expect(
      queryByText('Description : This is the description for Task 1'),
    ).toBeNull();
  });
});
