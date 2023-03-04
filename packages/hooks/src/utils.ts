import { DependencyList } from 'react';

/* eslint-disable indent */
export function isMobile() {
    const browserName = navigator.userAgent;

    const isPad = /ipad/i.test(browserName);  // 平板电脑
    const isIphone = /iphone/i.test(browserName); // 苹果手机
    const isMoto = /moto/i.test(browserName); // 摩托罗拉
    const isSamsung = /sm/i.test(browserName); // 三星
    const isUcWeb = /ucweb/i.test(browserName);  // UC
    const isAndroid = /Android/i.test(browserName); // Android 安卓

    return isPad || isIphone || isMoto || isSamsung || isUcWeb || isAndroid;
}

/**
 * 对比依赖的是否相等
 * @param oldDeps 
 * @param deps 
 * @returns 
 */
export function diffDependencys(oldDeps: DependencyList, deps: DependencyList) {
    if (oldDeps === deps) return true;
    for (let i = 0; i < oldDeps.length; i++) {
        if (!Object.is(oldDeps[i], deps[i])) return false;
    }
    return true;
}