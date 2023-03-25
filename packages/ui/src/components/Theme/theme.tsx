/* eslint-disable indent */
import React, { useCallback, useMemo, useState } from 'react';
import { createGlobalStyle, ThemedStyledProps, ThemeProvider } from 'styled-components';
import { complementaryColor, merg } from '@diabol/tool';
import { useMobile, useRenderEffect } from '@diabol/hooks';
import { IThemeProps, Theme, ThemeMode } from '@ui/interfaces';
import { getTheme, ThemeContent } from './context';
import { getThemeConfig, getThemeMode, setThemeConfig, setThemeMode, Size, Unit } from './utils';
import { globalCssVar } from '@ui/foundation/theme';


export interface IThemeContextProps {
    mode?: ThemeMode;
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
        font-family: Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
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
    // css 变量
    :root {
        ${(props) => {
        const theme = getTheme(props);
        return globalCssVar(theme);
    }}
    }
`;

export default function ThemeConfig(props: IThemeContextProps) {
    const isMobile = useMobile();
    const [theme, setTheme] = useState<ThemeMode>('light');
    const config = useMemo(() => {
        const data: Theme = getThemeConfig(theme);
        const _theme: Theme = merg(getThemeConfig(theme), {
            ...data,
            mobile: isMobile,
            unit: isMobile ? 'rem' : 'px' as any,
        });
        setThemeConfig(_theme);
        _theme.Size = Size.bind(_theme);
        _theme.Unit = Unit.bind(_theme);
        return _theme;
    }, [props.theme, isMobile, theme]);
    const update = useCallback((mode: ThemeMode) => {
        setThemeMode(mode);
        setTheme(mode);
    }, [theme, isMobile]);
    // 初始化时读取状态
    useRenderEffect(() => {
        setThemeMode(getThemeMode());
        setTheme(getThemeMode());
    }, []);
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
};