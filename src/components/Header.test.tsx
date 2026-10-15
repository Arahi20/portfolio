import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from './Header';
import { TABS } from '../types';

describe('Header Component', () => {
  it('renders all navigation tabs', () => {
    const setActiveTab = vi.fn();
    const setIsDark = vi.fn();

    render(
      <Header activeTab="Intro" setActiveTab={setActiveTab} isDark={false} setIsDark={setIsDark} />
    );

    TABS.forEach((tab) => {
      expect(screen.getByRole('tab', { name: tab })).toBeInTheDocument();
    });
  });

  it('indicates the active tab using aria-selected', () => {
    const setActiveTab = vi.fn();
    const setIsDark = vi.fn();

    render(
      <Header activeTab="Work" setActiveTab={setActiveTab} isDark={false} setIsDark={setIsDark} />
    );

    const workTab = screen.getByRole('tab', { name: 'Work' });
    const introTab = screen.getByRole('tab', { name: 'Intro' });

    expect(workTab).toHaveAttribute('aria-selected', 'true');
    expect(introTab).toHaveAttribute('aria-selected', 'false');
  });

  it('calls setActiveTab when a tab is clicked', () => {
    const setActiveTab = vi.fn();
    const setIsDark = vi.fn();

    render(
      <Header activeTab="Intro" setActiveTab={setActiveTab} isDark={false} setIsDark={setIsDark} />
    );

    fireEvent.click(screen.getByRole('tab', { name: 'Writing' }));
    expect(setActiveTab).toHaveBeenCalledWith('Writing');
  });

  it('toggles theme when theme button is clicked', () => {
    const setActiveTab = vi.fn();
    const setIsDark = vi.fn();

    render(
      <Header activeTab="Intro" setActiveTab={setActiveTab} isDark={false} setIsDark={setIsDark} />
    );

    const toggleButton = screen.getByRole('button', { name: /switch to dark theme/i });
    fireEvent.click(toggleButton);
    expect(setIsDark).toHaveBeenCalledWith(true);
  });

  it('supports keyboard arrow navigation between tabs', () => {
    const setActiveTab = vi.fn();
    const setIsDark = vi.fn();

    render(
      <Header activeTab="Intro" setActiveTab={setActiveTab} isDark={false} setIsDark={setIsDark} />
    );

    const introTab = screen.getByRole('tab', { name: 'Intro' });
    fireEvent.keyDown(introTab, { key: 'ArrowRight' });
    expect(setActiveTab).toHaveBeenCalledWith('Experience');
  });
});
