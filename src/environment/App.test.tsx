import { render, screen } from '@testing-library/react';
import App from './App';
import { axe } from 'jest-axe';
describe('renders learn react link', () => {
    it('renders app link correctly', () => {
        render(<App />);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });
    it('has no automatically testable accessibility violations', async () => {
        render(<App />);
        const html = await axe(document.body);
        expect(html).toHaveNoViolations();
    });
});
