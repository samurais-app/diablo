/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@ui/interfaces';
import { createContext } from 'react';
import defaultTheme from './defaultTheme';


export const ThemeContent = createContext({
    theme: defaultTheme,
    update: (the: Theme) => { return; },
});