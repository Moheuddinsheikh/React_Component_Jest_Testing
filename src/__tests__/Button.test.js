import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../Component/Button';

test('renders a button component', () => {
    const { getByText } = render(<Button label="Click me" />);
    const buttonElement = getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
  