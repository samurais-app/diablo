

export function isEqual(path: string, _path: string) {
  const pathList = path.split('/').filter(Boolean);
  const _pathList = _path.split('/').filter(Boolean);
  if (pathList.length !== _pathList.length) return false;
  if (pathList.join(',') !== _pathList.join(',')) return false;
  return true;
}

export function isMatch(path: string, _path: string) {
  const pathList = path.split('/').filter(Boolean);
  const _pathList = _path.split('/').filter(Boolean);
  return pathList.reduce((a, b, index) => {
    const target = _pathList[index] ?? '';
    if (!a || target.includes(':')) return a;
    return b === target;
  }, true);
}