import { DOM, merg } from '@diabol/tool';
import { Theme, ThemeMode } from '@ui/interfaces';
import { defaultTheme } from '.';


export function getThemeConfig(mode?: ThemeMode) {
  let _config: Theme = {};
  if (DOM.isBrowser) {
    _config = JSON.parse(localStorage.getItem('diablo-config') ?? '{}') as Theme;
  }
  const _mode = mode ?? getThemeMode();
  if (_config.mode === _mode) return merg(defaultTheme[_mode], _config);
  return defaultTheme[_mode];
}

export function setThemeConfig(theme: Theme) {
  if (DOM.isBrowser) {
    localStorage.setItem('diablo-config', JSON.stringify(theme));
  }
}

export function getThemeMode(): ThemeMode {
  let _theme: ThemeMode = 'light';
  if (DOM.isBrowser) {
    _theme = localStorage.getItem('diablo-theme') as ThemeMode;
  }
  return _theme ? _theme : 'light';
}

export function setThemeMode(mode: ThemeMode) {
  if (!DOM.isBrowser) return;
  localStorage.setItem('diablo-theme', mode);
}