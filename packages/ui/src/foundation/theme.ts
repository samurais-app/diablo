import { isArray, isBoolean, isFunction, isObject } from '@diabol/tool';

/**
 * 生成css使用的变量
 * @param theme 
 * @param prefix 
 * @returns 
 */
export function globalCssVar(theme: object | any[], prefix = 'theme') {
  if (isArray(theme)) {
    return theme.reduce((a, b, index) => {
      const key = `${prefix}${index}`;
      a += `--${key}:${b};`;
      return a;
    }, '');
  }
  return Object.entries(theme).reduce((a, b) => {
    const key = `${prefix}-${b[0]}`;
    if (!isObject(b[1]) && !isArray(b[1]) && !isFunction(b[1]) && !isBoolean(b[1])) {
      a += `--${key}:${b[1]};`;
      return a;
    }
    if (isObject(b[1])) {
      a += globalCssVar(b[1], key);
      return a;
    }
    if (isArray(b[1])) {
      a += globalCssVar(b[1], key);
      return a;
    }
    return a;
  }, '');
}