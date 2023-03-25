import { animated } from '@react-spring/web';
import { keyframes } from 'styled-components';
import { buttonPadding, buttonBg, borderRadius, buttonBorder, buttonActiveBg, buttonHoverBg, buttonLoadingSize, buttonCursor, buttonColor } from '@ui/foundation';
import { IButtonBoxProps, ThemeWithProps } from '@ui/interfaces';
import styled from 'styled-components';

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ButtonBox = styled.button<ThemeWithProps<IButtonBoxProps>>`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${buttonCursor};
  color: ${buttonColor};
  padding: ${buttonPadding};
  background-color: ${buttonBg};
  border-radius: ${borderRadius};
  border: ${buttonBorder};
  &:active {
    background-color: ${buttonActiveBg};
  }
  &:hover {
    background-color: ${buttonHoverBg};
  }
  & svg {
    color: ${buttonColor};
  }
`;

export const ButtonContent = styled(animated.div)``;

export const ButtonLoading = styled(animated.b)`
  height: ${buttonLoadingSize};
  width: ${buttonLoadingSize};
  transform-origin: center center;
  animation: ${loading} 0.6s infinite linear;
  & svg {
    width: 100%;
    height: 100%;
  }
`;