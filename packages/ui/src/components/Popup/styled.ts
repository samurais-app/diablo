import { animated } from '@react-spring/web';
import { popupBaseBg, popupBoxBg, popupBoxBorderRadius, popupBoxPadding, popupBoxShadow, popupClosePadding, popupCloseShow, popupCloseSpacing, popupContainerShow, popupWidth } from '@ui/foundation';
import { IPopupProps, ThemeWithProps } from '@ui/interfaces';
import styled from 'styled-components';


export const PopupBase = styled(animated.div)`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${popupBaseBg};
`;

export const PopupContainer = styled.div`
  display: ${popupContainerShow};
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const PopupClose = styled.b<ThemeWithProps<IPopupProps>>`
  position: absolute;
  display: ${popupCloseShow};
  padding: ${popupClosePadding};
  top: ${popupCloseSpacing};
  right: ${popupCloseSpacing};
`;

export const PopupBox = styled(animated.div)`
  width: ${popupWidth};
  background-color: ${popupBoxBg};
  padding: ${popupBoxPadding};
  box-shadow: ${popupBoxShadow};
  border-radius: ${popupBoxBorderRadius};
  transform: scale(0);
  position: relative;
  box-sizing: border-box;
  pointer-events: all;
  z-index: 20;
`;