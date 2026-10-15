import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import App from './App';

describe('App Integration', () => {
  beforeEach(() => {
    localStorage.clear();
    window.location.hash = '';
    document.documentElement.className = '';
  });

  it('renders header, intro tab by default, and footer', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /ahmed rahi/i })).toBeInTheDocument();
    expect(
      screen.getByText(/A Software Engineer specializing in full-stack development/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/© \d{4}/)).toBeInTheDocument();
  });

  it('switches to Experience tab when clicked', () => {
    render(<App />);

    const expTab = screen.getByRole('tab', { name: 'Experience' });
    fireEvent.click(expTab);

    expect(screen.getByText(/Quantium/i)).toBeInTheDocument();
    expect(screen.getByText(/Micro-Frontend/i)).toBeInTheDocument();
  });

  it('loads tab from URL hash on initial render', () => {
    window.location.hash = '#education';
    render(<App />);

    expect(screen.getByRole('heading', { level: 2, name: /degrees/i })).toBeInTheDocument();
    expect(screen.getByText(/University of Leeds/i)).toBeInTheDocument();
  });

  it('toggles dark mode class on documentElement and saves preference', () => {
    render(<App />);

    const toggleBtn = screen.getByRole('button', { name: /switch to dark theme/i });
    fireEvent.click(toggleBtn);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    // Click again to switch back
    const lightBtn = screen.getByRole('button', { name: /switch to light theme/i });
    fireEvent.click(lightBtn);

    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
