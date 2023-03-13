/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { isEmpty } from '@diabol/tool';
import { DOM } from '@diabol/tool';
import { Theme, ThemeMode, ThemeWithProps } from '@ui/interfaces';
import { createContext } from 'react';
import defaultTheme from './defaultTheme';


export const ThemeContent = createContext({
    theme: defaultTheme,
    update: (the: Theme) => { return; },
});

export function getTheme<P>(props: ThemeWithProps<P>) {
    return isEmpty(props.theme) ? defaultTheme : props.theme;
}

export function getThemeMode(): ThemeMode {
    if (!DOM.isBrowser) return 'light';
    const theme = (localStorage.getItem('diablo-theme') ?? document.body.getAttribute('theme')) as ThemeMode;
    return theme ? theme : 'light';
}

export function setThemeMode(mode: ThemeMode) {
    if (!DOM.isBrowser) return;
    document.body.setAttribute('theme', mode);
    localStorage.setItem('diablo-theme', mode);
}