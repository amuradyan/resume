import React from 'react';

function ThemeToggle({ currentTheme, onThemeChange }) {
  const handleToggle = () => {
    onThemeChange(currentTheme === 'personal' ? 'charcoal' : 'personal');
  };

  const isCorporate = currentTheme === 'charcoal';

  return (
    <div className="theme-toggle-container" onClick={handleToggle} title="Switch theme">
      <span className="toggle-emoji toggle-emoji-personal">🎉</span>
      <div className="toggle-track">
        <div className={`toggle-slider ${isCorporate ? 'corporate' : 'personal'}`}></div>
      </div>
      <span className="toggle-emoji toggle-emoji-corporate">💼</span>
    </div>
  );
}

export default ThemeToggle;
