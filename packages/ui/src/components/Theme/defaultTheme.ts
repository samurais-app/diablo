/* eslint-disable indent */

import { IThemeConfig, Theme } from '@ui/interfaces';

export const light: Theme = {
    mode: 'light',
    size: 14,
    unit: 'rem',
    mobile: false,
    borderRadius: true,
    color: {
        primary: '#0A992E',
        transparent: 'transparent',
        error: '#fb1f6a',
        background: '#FFFFFF',
        border: '#BEBEBE',
        text: '#292929'
    },
    spacing: {
        fontSize: [12, 16, 22, 30, 40],
        spacing: [4, 8, 12, 16, 20],
        radius: [4, 6, 8, 10, 12],
        padding: [8, 12, 18, 26, 36]
    }
};

export const dark: Theme = {
    mode: 'dark',
    size: 14,
    unit: 'rem',
    mobile: false,
    borderRadius: true,
    color: {
        primary: '#0A992E',
        transparent: 'transparent',
        error: '#fb1f6a',
        background: '#121212',
        border: '#828282',
        text: '#FFFFFF'
    },
    spacing: {
        fontSize: [12, 16, 22, 30, 40],
        spacing: [4, 8, 12, 16, 20],
        radius: [4, 6, 8, 10, 12],
        padding: [8, 12, 18, 26, 36]
    }
};

const config = {
    dark,
    light
} as IThemeConfig;

export default config;