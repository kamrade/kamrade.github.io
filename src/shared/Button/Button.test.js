import { render, screen, cleanup } from '@testing-library/react';
import { Button } from '.';

it('should render Button component', () => {

  const textContent = 'Test button';

  render(<Button data-testid={'button-1'}> {textContent} </Button>);
  const buttonElement = screen.getByTestId('button-1');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent(textContent);
})
