import styled from 'styled-components';
import { ThemeWithProps, IInputProps } from '@ui/interfaces';
import { inputBgColor, inputBorder, inputBorderRadius, inputCaretColor, inputFontSize, inputPadding } from '@ui/foundation';


export const InputContainerStyled = styled.div<ThemeWithProps<IInputProps>>`
  box-sizing: border-box;
  width: 200px;
  background-color: ${inputBgColor};
  padding: ${inputPadding};
  border-radius: ${inputBorderRadius};
  border: ${inputBorder};
  transition: all 0.2s ease 0s;
  display: flex;
  flex-direction: row;
  position: relative;
  & input {
    font-size: ${inputFontSize};
  }
`;

export const InputStyled = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  position: relative;
  letter-spacing: 1px;
  appearance: textfield;
  color: ${inputCaretColor};
  caret-color: ${inputCaretColor};
  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    appearance: none;
  };
  &::placeholder {
    color: #757575;
  };

  &:focus {
      outline: none;
  };
`;