import isequal from 'lodash.isequal';

export function isEqual(target: any, source: any) {
  return isequal(target, source);
}