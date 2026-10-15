import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WorkTab from './WorkTab';

describe('WorkTab Component', () => {
  it('renders all work items', () => {
    render(<WorkTab />);

    expect(screen.getByText('Kinect Fitness Playground')).toBeInTheDocument();
    expect(screen.getByText('Edustruct (Imperial Hackathon)')).toBeInTheDocument();
    expect(screen.getByText('Covert Woods (2D Engine)')).toBeInTheDocument();
  });

  it('renders link for projects that have one and no link for Covert Woods', () => {
    render(<WorkTab />);

    // Kinect has a link
    const kinectLink = screen.getByRole('link', { name: /kinect fitness playground/i });
    expect(kinectLink).toHaveAttribute('href', 'https://github.com/Arahi20/Kinect-Fitness');

    // Covert Woods does NOT have a link
    const covertWoodsElement = screen.getByText('Covert Woods (2D Engine)');
    expect(covertWoodsElement.closest('a')).toBeNull();
  });
});
