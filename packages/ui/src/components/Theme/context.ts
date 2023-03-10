/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { isEmpty } from '@diabol/tool';
import { ThemeMode, ThemeWithProps } from '@ui/interfaces';
import { createContext } from 'react';
import defaultTheme from './defaultTheme';


export const ThemeContent = createContext({
    theme: defaultTheme.light,
    update: (mode: ThemeMode) => { return; },
});

export function getTheme<P>(props: ThemeWithProps<P>) {
    return isEmpty(props.theme) ? defaultTheme.light : props.theme;
}