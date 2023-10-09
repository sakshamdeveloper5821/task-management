/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders Navbar component with links', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(getByText('Task Manager')).toBeInTheDocument();
    expect(getByText('Dashboard')).toBeInTheDocument();
    expect(getByText('Projects')).toBeInTheDocument();
  });
});
