/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DOM, isEmpty } from '@diabol/tool';
import { Theme, ThemeMode, ThemeWithProps } from '@ui/interfaces';
import { createContext } from 'react';
import defaultTheme from './defaultTheme';
import { getThemeConfig } from './utils';

export const ThemeContent = createContext({
    theme: defaultTheme.light,
    update: (mode: ThemeMode) => { return; },
});

export function getTheme<P>(props: ThemeWithProps<P>): Theme {
    return isEmpty(props.theme) ? getThemeConfig(getThemeMode()) : props.theme;
}

export function getThemeMode(): ThemeMode {
    const _theme: ThemeMode = 'light';
    if (DOM.isBrowser) {
        //_theme = localStorage.getItem('diablo-theme') as ThemeMode;
    }
    return _theme ? _theme : 'light';
}