import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Theme, Translations, translations } from '../i18n/translations';

interface AppContextType {
  theme: Theme;
  isLight: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  cycleLanguage: () => void;
  t: Translations;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const getSystemTheme = (): Theme => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'dark';
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state dynamically initialized from system preferences
  const [theme, setThemeState] = useState<Theme>(getSystemTheme);

  // Language state with localStorage initialization
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lumio_lang') as Language;
      if (savedLang === 'uz' || savedLang === 'ru' || savedLang === 'en') {
        return savedLang;
      }
      // Fall back to browser language
      const browserLang = navigator.language?.toLowerCase() ?? '';
      if (browserLang.startsWith('ru')) return 'ru';
      if (browserLang.startsWith('en')) return 'en';
    }
    // O'zbekiston bozori uchun standart til
    return 'uz';
  });

  // Automatically listen to system theme preference changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    // Remove obsolete stored theme so it doesn't conflict with system mode
    try {
      localStorage.removeItem('lumio_theme');
    } catch {
      // Ignore storage errors in restrictive environments
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Sync state to current system mode immediately
    setThemeState(mediaQuery.matches ? 'dark' : 'light');

    const handleSystemChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setThemeState(e.matches ? 'dark' : 'light');
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
      return () => mediaQuery.removeEventListener('change', handleSystemChange);
    } else if (mediaQuery.addListener) {
      // Fallback for older browsers
      mediaQuery.addListener(handleSystemChange);
      return () => mediaQuery.removeListener(handleSystemChange);
    }
  }, []);

  // Synchronize theme with DOM
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    }
  }, [theme]);

  // Synchronize language with DOM and localStorage
  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem('lumio_lang', language);
    } catch {
      // Ignore storage errors
    }
  }, [language]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const cycleLanguage = () => {
    setLanguageState((prev) => (prev === 'uz' ? 'ru' : prev === 'ru' ? 'en' : 'uz'));
  };

  const isLight = theme === 'light';
  const t = translations[language];

  return (
    <AppContext.Provider
      value={{
        theme,
        isLight,
        toggleTheme,
        setTheme,
        language,
        setLanguage,
        cycleLanguage,
        t
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
