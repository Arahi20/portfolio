import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CtaButton from './CtaButton';

describe('CtaButton Component', () => {
  it('should render the button with provided text', () => {
    render(<CtaButton href="mailto:test@example.com">Let's Talk</CtaButton>);
    expect(screen.getByText(/Let's Talk/i)).toBeInTheDocument();
  });

  it('should have the correct href attribute', () => {
    render(<CtaButton href="https://example.com">Contact Me</CtaButton>);
    const linkElement = screen.getByText(/Contact Me/i);
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });
});
