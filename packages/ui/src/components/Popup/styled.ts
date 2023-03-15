import { complementaryColor } from '@diabol/tool';
import { animated } from '@react-spring/web';
import { popupWidth } from '@ui/foundation';
import styled from 'styled-components';


export const PopupBase = styled(animated.div)`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => complementaryColor(props.theme.color.background)};
`;

export const PopupContainer = styled.div`
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

export const PopupBox = styled(animated.div)`
  width: ${popupWidth};
  position: relative;
  z-index: 20;
`;