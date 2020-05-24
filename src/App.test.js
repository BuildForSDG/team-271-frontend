import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/login_layout';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/WONYA/i);
  expect(linkElement).toBeInTheDocument();
});