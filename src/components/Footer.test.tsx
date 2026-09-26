import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render the footer with the name Ahmed Rahi', () => {
    render(<Footer />);
    expect(screen.getByText(/Ahmed Rahi/i)).toBeInTheDocument();
  });
});
