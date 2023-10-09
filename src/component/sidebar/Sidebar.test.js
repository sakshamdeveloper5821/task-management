/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('renders Sidebar component', () => {
    const { getByText } = render(<Sidebar />);
    expect(getByText('RoadMap')).toBeInTheDocument();
    expect(getByText('Releases')).toBeInTheDocument();
    expect(getByText('Backlog')).toBeInTheDocument();
    expect(getByText('Reports')).toBeInTheDocument();
    expect(getByText('Spam')).toBeInTheDocument();
  });
});
