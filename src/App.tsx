import { useState, useLayoutEffect, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Tab } from './types';
import { TABS } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroTab from './components/tabs/IntroTab';
import ExperienceTab from './components/tabs/ExperienceTab';
import WorkTab from './components/tabs/WorkTab';
import WritingTab from './components/tabs/WritingTab';
import EducationTab from './components/tabs/EducationTab';
import styles from './App.module.css';

function getTabFromLocation(): Tab {
  if (typeof window === 'undefined') return 'Intro';
  // Check pathname first (e.g., /work, /experience)
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  const matchedPath = TABS.find((t) => t.toLowerCase() === path);
  if (matchedPath) return matchedPath;

  // Backward compatibility: check hash in case of legacy bookmarked links like #work
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  const matchedHash = TABS.find((t) => t.toLowerCase() === hash);
  if (matchedHash) return matchedHash;

  return 'Intro';
}

export default function App() {
  const [activeTab, setActiveTabState] = useState<Tab>(getTabFromLocation);

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') return true;
      if (stored === 'light') return false;
      return (
        document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
    return false;
  });

  useEffect(() => {
    // If user arrived with a legacy hash (e.g. /#work), normalize to clean path (/work)
    if (window.location.hash) {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      const matched = TABS.find((t) => t.toLowerCase() === hash);
      if (matched) {
        const cleanPath = matched === 'Intro' ? '/' : `/${matched.toLowerCase()}`;
        window.history.replaceState(null, '', cleanPath);
      }
    }

    const handleLocationChange = () => {
      setActiveTabState(getTabFromLocation());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const setActiveTab = useCallback((tab: Tab) => {
    setActiveTabState(tab);
    const targetPath = tab === 'Intro' ? '/' : `/${tab.toLowerCase()}`;
    const currentPath = window.location.pathname;
    if (currentPath !== targetPath || window.location.hash) {
      window.history.pushState(null, '', targetPath);
    }
  }, []);

  useLayoutEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return (
    <div className={styles.container}>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <main className={styles.mainContent}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            id={`panel-${activeTab.toLowerCase()}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.toLowerCase()}`}
            tabIndex={0}
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {activeTab === 'Intro' && <IntroTab />}
            {activeTab === 'Experience' && <ExperienceTab />}
            {activeTab === 'Work' && <WorkTab />}
            {activeTab === 'Writing' && <WritingTab />}
            {activeTab === 'Education' && <EducationTab />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
