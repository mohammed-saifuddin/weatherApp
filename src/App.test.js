import { render, screen } from '@testing-library/react';
import App from './App';

test('renders weather app heading', () => {
  render(<App />);
  
  const headingElement = screen.getByText(/Know the weather of your city/i);
  
  expect(headingElement).toBeInTheDocument();
});
