/* eslint-disable indent */
import React, { memo, useCallback, useMemo, useState } from 'react';
import { createGlobalStyle, ThemedStyledProps, ThemeProvider } from 'styled-components';
import { complementaryColor, DOM, isObject, merg } from '@diabol/tool';
import { useMobile } from '@diabol/hooks';
import { IThemeProps, Theme, ThemeMode } from '@ui/interfaces';
import { ThemeContent } from './context';
import defaultTheme from './defaultTheme';

function getThemeMode(): ThemeMode {
    if (!DOM.isBrowser) return 'light';
    const theme = (localStorage.getItem('diablo-theme') ?? document.body.getAttribute('theme')) as ThemeMode;
    return theme ? theme : 'light';
}

function setThemeMode(mode: ThemeMode) {
    if (!DOM.isBrowser) return;
    document.body.setAttribute('theme', mode);
    localStorage.setItem('diablo-theme', mode);
}
export interface IThemeContextProps {
    theme?: IThemeProps;
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
    * {
        -webkit-tap-highlight-color: transparent;
    }
`;

export default memo(function ThemeConfig(props: IThemeContextProps) {
    const isMobile = useMobile();
    const [theme, setTheme] = useState<ThemeMode>(getThemeMode());
    const config = useMemo(() => {
        const data: Theme = isObject(props.theme) ? props.theme[theme] : defaultTheme[theme];
        const _theme = { ...data, mobile: isMobile, unit: isMobile ? 'rem' : 'px' as any };
        return merg(defaultTheme[theme], _theme);
    }, [props.theme, isMobile, theme]);
    const update = useCallback((mode: ThemeMode) => {
        setThemeMode(mode);
        setTheme(mode);
    }, [theme, isMobile]);
    return (
        <ThemeContent.Provider value={{ theme: config, update }}>
            <ThemeProvider
                theme={config}
            >
                <Global />
                {props.children}
            </ThemeProvider>
        </ThemeContent.Provider>
    );
});