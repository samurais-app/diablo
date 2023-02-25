/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@/interfaces';
import { createContext } from 'react';
import themeConfig from './defaultConfig';


export const ThemeContent = createContext({
    theme: themeConfig,
    update: (the: Theme) => { return; },
});