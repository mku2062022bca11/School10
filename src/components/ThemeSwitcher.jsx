import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();

  const themes = [
    { name: 'green', color: '#10b981', label: 'Green' },
    { name: 'blue', color: '#3b82f6', label: 'Blue' },
    { name: 'purple', color: '#8b5cf6', label: 'Purple' },
    { name: 'red', color: '#ef4444', label: 'Red' }
  ];

  return (
    <div className="flex flex-col items-center space-y-3">
      <h4 className="text-sm font-medium text-gray-700">Theme Colors</h4>
      <div className="flex space-x-3">
        {themes.map((themeOption) => (
          <button
            key={themeOption.name}
            onClick={() => changeTheme(themeOption.name)}
            className={`w-8 h-8 rounded-full transition-all duration-200 ${
              theme === themeOption.name
                ? 'ring-2 ring-offset-2 ring-gray-400 scale-110'
                : 'hover:scale-105'
            }`}
            style={{ backgroundColor: themeOption.color }}
            title={themeOption.label}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;