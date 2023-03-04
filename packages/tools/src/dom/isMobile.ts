import { isNum } from '..';

export function isMobile(width?: number) {
  const browserName = typeof window !== 'undefined' ? navigator.userAgent : '';

  const isPad = /ipad/i.test(browserName);  // 平板电脑
  const isIphone = /iphone/i.test(browserName); // 苹果手机
  const isMoto = /moto/i.test(browserName); // 摩托罗拉
  const isSamsung = /sm/i.test(browserName); // 三星
  const isUcWeb = /ucweb/i.test(browserName);  // UC
  const isAndroid = /Android/i.test(browserName); // Android 安卓
  if (isPad || isIphone || isMoto || isSamsung || isUcWeb || isAndroid || (isNum(width) && width <= 600)) {
    return true;
  } else {
    return false;
  }
}