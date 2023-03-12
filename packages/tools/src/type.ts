/* eslint-disable @typescript-eslint/ban-types */
export type BaseType =
  '[object String]' |
  '[object Function]' |
  '[object Object]' |
  '[object Array]' |
  '[object BigInt]' |
  '[object BigInt64Array]' |
  '[object BigUint64Array]' |
  '[object Boolean]' |
  '[object Symbol]' |
  '[object Number]' |
  '[object Undefined]' |
  '[object Null]' |
  '[object Arguments]' |
  '[object ArrayBuffer]' |
  '[object Buffer]'

export function type(data?: any): BaseType {
  return Object.prototype.toString.call(data) as BaseType;
}

export function isFunction(func: any): func is Function {
  return type(func) === '[object Function]';
}

export function isArray(arr: any): arr is any[] {
  return type(arr) === '[object Array]';
}

export function isBuffer(arr: any): boolean {
  return type(arr) === '[object Buffer]';
}

export function isObject(obj: any): boolean {
  return type(obj) === '[object Object]';
}

export function isString(str: any): str is string {
  return type(str) === '[object String]';
}

export function isBigint(big: any): big is bigint {
  return type(big) === '[object BigInt]';
}

export function isBoolean(bol: any): bol is boolean {
  return type(bol) === '[object Boolean]';
}

export function isSymbol(sbl: any): sbl is symbol {
  return type(sbl) === '[object Symbol]';
}

export function isNum(num: any): num is number {
  return type(num) === '[object Number]';
}

export function isUndefined(un?: any): un is undefined {
  return type(un) === '[object Undefined]';
}

export function isNull(un?: any): un is null {
  return type(un) === '[object Null]';
}

export function isEmpty(value: any) {
  if (isArray(value)) return !value.length;
  if (isObject(value)) return !Object.keys(value).length;
  if (isUndefined(value) || isNull(value)) return true;
  if (isString(value)) return !value;
  return false;
}


