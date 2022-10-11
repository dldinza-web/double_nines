import * as React from 'react'
import { render, screen } from '@testing-library/react';
import App from '../app';

test('Hello test', () => {
  render(<App/>)

  const linkElement = screen.getByText(/Ruby 7/i);
  expect(linkElement).toBeTruthy();
});
