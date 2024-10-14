import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Student Information System header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Student Information System/i);
  expect(linkElement).toBeInTheDocument();
});
