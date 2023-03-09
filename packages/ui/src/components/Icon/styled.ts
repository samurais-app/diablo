import { iconSize } from '@ui/foundation';
import { IconProps, ThemeWithProps } from '@ui/interfaces';
import styled from 'styled-components';


export const IconBox = styled.svg<ThemeWithProps<IconProps>>`
  font-size: ${iconSize};
  cursor: pointer;
`;