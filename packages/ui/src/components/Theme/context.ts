/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DOM, isEmpty } from '@diabol/tool';
import { Theme, ThemeMode, ThemeWithProps } from '@ui/interfaces';
import { createContext } from 'react';
import defaultTheme from './defaultTheme';
import { getThemeConfig, getThemeMode } from './utils';

export const ThemeContent = createContext({
    theme: defaultTheme.light,
    update: (mode: ThemeMode) => { return; },
});

export function getTheme<P>(props: ThemeWithProps<P>): Theme {
    return isEmpty(props.theme) ? getThemeConfig(getThemeMode()) : props.theme;
}