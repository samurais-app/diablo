import React from 'react';
import { FunctionComponent } from 'react';
import { IconType, code } from './code';

export const isBrowser = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

export default function withIcon<P>(Component: FunctionComponent<P>) {
    if (isBrowser && !document.getElementById('svg-sprite-icons')) {
        const dom = document.createElement('div');
        dom.id = 'svg-sprite-icons';
        dom.innerHTML = code;
        document.body.appendChild(dom);
    }
    return function DiabolIcon(props: P & { type: IconType }) {
        return <Component {...props} />;
    };
}