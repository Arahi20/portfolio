import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import IntroTab from './IntroTab';

describe('IntroTab Component', () => {
  it('renders bio paragraphs and CTA button', () => {
    render(<IntroTab />);

    expect(
      screen.getByText(/A Software Engineer specializing in full-stack development/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /let's talk/i })).toHaveAttribute(
      'href',
      'mailto:Ahmed_Rahi@icloud.com'
    );
  });

  it('renders all social and contact links with correct URLs', () => {
    render(<IntroTab />);

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Arahi20');

    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/ahmed-rahi-8576a3217'
    );

    const emailLink = screen.getByRole('link', { name: /^email$/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:Ahmed_Rahi@icloud.com');

    const mediumLink = screen.getByRole('link', { name: /medium/i });
    expect(mediumLink).toHaveAttribute('href', 'https://medium.com/@ahmedrahi');
  });
});
