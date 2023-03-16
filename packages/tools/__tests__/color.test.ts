import { color, hex, hexToRgb } from '@tools/color';

describe('color', () => {
  test('rgb to hex', () => {
    const data = hex('rgb(255,255,255)');
    expect(data).toBe('#ffffff');
  });

  test('rgba to hex', () => {
    const data = hex('rgba(18,18,18,0.5)');
    expect(data).toBe('#12121280');
  });

  test('hex to rgb', () => {
    const data = hexToRgb('#7F5959');
    expect(data).toBe('rgb(127,89,89)');
  });

  test('color dark', () => {
    const data = color('#AD2828', 0, false);
    expect(data).toBe('111');
  });
});