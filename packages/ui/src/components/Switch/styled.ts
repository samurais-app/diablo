import { SwitchBaseOption, switchBg, switchBorder, switchBorderRadius, switchBtnBg, switchBtnBorderRadius, switchBtnBoxShadow, switchBtnLeft, switchBtnSize, switchBtnTop, switchFontSize, switchHeight, SwitchIconBase, switchWidth } from '@ui/foundation';
import styled from 'styled-components';

export const SwitchBox = styled.div<SwitchBaseOption>`
  width: ${switchWidth};
  height: ${switchHeight};
  border-radius: ${switchBorderRadius};
  border: ${switchBorder};
  background-color: ${switchBg};
  cursor: pointer;
  position: relative;
`;

export const SwitchIcon = styled.div<SwitchIconBase>`
  position: absolute;
  transition: left 0.3s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${switchBtnSize};
  height: ${switchBtnSize};
  border-radius: ${switchBtnBorderRadius};
  background-color: ${switchBtnBg};
  top: ${switchBtnTop};
  left: ${switchBtnLeft};
  font-size: ${switchFontSize};
  box-shadow: ${switchBtnBoxShadow};
`;

export const SwitchText = styled.span`

`;