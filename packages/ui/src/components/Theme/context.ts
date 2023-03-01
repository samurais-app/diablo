/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@ui/interfaces';
import { createContext } from 'react';
import defaultConfig from './defaultConfig';


export const ThemeContent = createContext({
    theme: defaultConfig,
    update: (the: Theme) => { return; },
});