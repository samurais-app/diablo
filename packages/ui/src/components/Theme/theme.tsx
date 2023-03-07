/* eslint-disable indent */
import React, { useState } from 'react';
import deepmerge from 'deepmerge';
import { createGlobalStyle, ThemedStyledProps, ThemeProvider } from 'styled-components';
import { ThemeContent } from './context';
import defaultConfig from './defaultConfig';
import { complementaryColor } from '@frade-sam/samtools';
import { useMobile } from '@diabol/hooks';
import { Theme } from '@ui/interfaces';

export interface IThemeContextProps {
    theme?: Omit<Theme, 'Size' | 'unit' | 'mobile'>;
    children: JSX.Element | JSX.Element;
}

const Global = createGlobalStyle<ThemedStyledProps<any, Theme>>`
    ::scrollbar {
        width: 0.8em;
        height: 0.8em;
    }
    ::scrollbar-thumb {
        background-color: ${props => complementaryColor(props.theme.color.background)};
        border-radius: 25px;
    }
    body {
        font-size: ${props => props.theme.size}px;
        margin: 0;
        padding: 0;
        height: 100vh;
        background-color: ${props => props.theme.color.background};
        overflow: overlay;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    ul,li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    #app {
        margin: 0;
        padding: 0;
        height: 100vh;
    }
`;

export default function ThemeConfig(props: IThemeContextProps) {
    const isMobile = useMobile();
    const [theme, setTheme] = useState<Theme>(deepmerge(defaultConfig, { ...props.theme } || {}));
    console.log(theme, isMobile, '<<<');
    const update = (the: Theme) => {
        setTheme((data) => {
            return deepmerge(data, the);
        });
    };

    return (
        <ThemeContent.Provider value={{ theme: { ...theme, mobile: isMobile, unit: isMobile ? 'rem' : 'px' as any }, update }}>
            <ThemeProvider
                theme={{ ...theme, mobile: isMobile, unit: isMobile ? 'rem' : 'px' as any }}
            >
                <Global />
                {props.children}
            </ThemeProvider>
        </ThemeContent.Provider>
    );
}