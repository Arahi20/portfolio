import { FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import type { Tab } from '../types';
import { TABS } from '../types';
import styles from './Header.module.css';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function Header({ activeTab, setActiveTab, isDark, setIsDark }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Ahmed Rahi</h1>
        <motion.button
          onClick={() => setIsDark(!isDark)}
          className={styles.themeToggle}
          aria-label="Toggle dark mode"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDark ? 'dark' : 'light'}
              initial={{ y: -30, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 30, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{ position: 'absolute' }}
            >
              {isDark ? (
                <FiSun style={{ width: '1.25rem', height: '1.25rem' }} />
              ) : (
                <FiMoon style={{ width: '1.25rem', height: '1.25rem' }} />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      <nav className={styles.nav}>
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tabButton} ${
              activeTab === tab ? styles.tabButtonActive : styles.tabButtonInactive
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.span layoutId="activeTabIndicator" className={styles.activeIndicator} />
            )}
          </button>
        ))}
      </nav>
    </header>
  );
}
