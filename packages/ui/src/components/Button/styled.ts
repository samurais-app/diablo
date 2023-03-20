import { animated } from '@react-spring/web';
import { keyframes } from 'styled-components';
import { buttonTextColor, buttonPadding, buttonBg, borderRadius, buttonBorder, buttonActiveBg, buttonHoverBg, buttonLoadingMargin, buttonLoadingWidth, buttonLoadingHeight } from '@ui/foundation';
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
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${buttonTextColor};
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
`;

export const ButtonLoading = styled(animated.b)`
  width: ${buttonLoadingWidth};
  height: ${buttonLoadingHeight};
  animation: ${loading} 0.6s infinite linear;
  & svg {
    width: 100%;
    height: 100%;
  }
  /* margin-left: ${buttonLoadingMargin}; */
`;