import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('App', () => {
  it('should match snapshot', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });

  it('should have title class', () => {
    const { getByText } = render(<App />);

    expect(getByText('Welcome to React')).toHaveClass('title');
  });
});
