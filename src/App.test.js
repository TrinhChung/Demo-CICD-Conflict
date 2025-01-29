import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Japanese message and link', () => {
  render(<App />);

  const japaneseText = screen.getByText((content, element) => {
    return content.includes('すべてはこの星で') && content.includes('生き続けるために。');
  });
  expect(japaneseText).toBeInTheDocument();

  const linkElement = screen.getByRole('link', { name: /BIPROGY/i });
  expect(linkElement).toBeInTheDocument();

  expect(linkElement).toHaveAttribute('href', 'https://www.biprogy.com/');
});
