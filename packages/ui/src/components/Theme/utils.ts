import { DOM, merg } from '@diabol/tool';
import { Theme, ThemeMode } from '@ui/interfaces';
import { defaultTheme } from '.';

export function Size(this: any, num: number) {
  const unit = this.unit;
  const size = this.size;
  return unit === 'rem' ? Number(Number(num / size).toFixed(2)) : num;
}

export function Unit(this: any, num: number) {
  const unit = this.unit;
  const size = this.size;
  const data = unit === 'rem' ? Number(Number(num / size).toFixed(2)) : num;
  return `${data}${unit}`;
}

export function getThemeConfig(mode?: ThemeMode) {
  let _config: Theme = {};
  if (DOM.isBrowser) {
    _config = JSON.parse(localStorage.getItem('diablo-config') ?? '{}') as Theme;
  }
  const _mode = mode ?? getThemeMode();
  if (_config.mode === _mode) {
    const data = merg(defaultTheme[_mode], _config) as Theme;
    data.Size = Size.bind(data);
    data.Unit = Unit.bind(data);
    return data;
  }
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
    _theme = document.body.getAttribute('theme') as ThemeMode;
  }
  if (!_theme) {
    _theme = localStorage.getItem('diablo-theme') as ThemeMode;
  }
  return _theme ? _theme : 'light';
}

export function setThemeMode(mode: ThemeMode) {
  if (!DOM.isBrowser) return;
  localStorage.setItem('diablo-theme', mode);
  document.body.setAttribute('theme', mode);
}