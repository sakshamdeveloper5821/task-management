/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component with Navbar, Sidebar, and Board', () => {
    const { getByText } = render(<App />);

    expect(getByText('Task Manager')).toBeInTheDocument();
    expect(getByText('RoadMap')).toBeInTheDocument();
  });
});
