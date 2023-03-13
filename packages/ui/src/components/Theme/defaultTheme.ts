/* eslint-disable indent */

import { Theme } from '@ui/interfaces';

const config = {
    mode: 'light',
    size: 14,
    unit: 'rem',
    mobile: false,
    borderRadius: true,
    Size: function (num: number) {
        const unit = this ? this.unit : config.unit;
        return unit === 'rem' ? Number(num / this.size).toFixed(2) : num;
    },
    color: {
        primary: '#0A992E',
        transparent: 'transparent',
        error: '#fb1f6a',
        background: '#FFFFFF',
        border: '#eeeeee',
        text: '#292929'
    },
    spacing: {
        fontSize: [12, 16, 22, 30, 40],
        spacing: [4, 8, 12, 16, 20],
        radius: [4, 6, 8, 10, 12],
        padding: [8, 12, 18, 26, 36]
    }
} as Theme;

export default config;