import { useState, useLayoutEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Tab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroTab from './components/tabs/IntroTab';
import ExperienceTab from './components/tabs/ExperienceTab';
import WorkTab from './components/tabs/WorkTab';
import WritingTab from './components/tabs/WritingTab';
import EducationTab from './components/tabs/EducationTab';
import styles from './App.module.css';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Intro');

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
    return false;
  });

  useLayoutEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

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
