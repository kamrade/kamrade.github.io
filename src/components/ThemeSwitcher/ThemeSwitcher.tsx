// Change body className which change css variables values.

import React, { FocusEvent, useRef, useState, useEffect, memo } from 'react';
import './ThemeSwitcher.scss';

export type ColorTheme = 'dark' | 'light';

const ThemeSwitcherM = () => {

  const [focus, setFocus] = useState(false);
  const [theme, setTheme] = useState<ColorTheme>('light');
  const body = document.body;

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    if (theme === 'light') {
      body?.classList.remove('dark');
      body?.classList.add('light');
    } else {
      body?.classList.remove('light');
      body?.classList.add('dark');
    }
  }, [theme, body]);

  const checkboxEl = useRef(null);

  const focusHandler: ((event: FocusEvent<HTMLInputElement>) => void) = () => {
    setFocus(true);
  }

  const blurHandler: ((event: React.FocusEvent<HTMLInputElement>) => void)= () => {
    setFocus(false);
  }

  return (
    <div onClick={() => {
      toggleTheme && toggleTheme();
      if (checkboxEl) {
        let curr = checkboxEl.current as any;
        curr.focus();
      }
    }}
      className={`muzq-theme-switcher ${theme} ${focus ? 'focus' : ''}`}>

      <input
        ref={checkboxEl}
        onFocus={focusHandler}
        onBlur={blurHandler}
        className="muzq-theme-switcher--screenreader-only"
        type="checkbox"
        aria-label="Switch between Dark and Light mode"
      />

      <div className="muzq-theme-switcher--switch" />
      <div className="muzq-theme-switcher--text">{theme}</div>
      <div className="muzq-theme-switcher--hover-effect right" />
      <div className="muzq-theme-switcher--hover-effect left" />

    </div>
  )
};

export const ThemeSwitcher = memo(ThemeSwitcherM);
