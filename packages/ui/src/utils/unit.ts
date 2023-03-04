

export function number(num: number, unit = 'px') {
  if (unit === 'px') {
    return num;
  }
  return Number(num / 16).toFixed(2);
}