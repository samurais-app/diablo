import { DOM, merg } from '@diabol/tool';
import { Theme, ThemeMode } from '@ui/interfaces';
import { defaultTheme, getThemeMode } from '.';


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