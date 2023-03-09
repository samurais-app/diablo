import { switchWidth } from '@ui/foundation/switch';
import { SwitchProps, ThemeWithProps } from '@ui/interfaces';
import styled from 'styled-components';

export const SwitchBox = styled.div<ThemeWithProps<Omit<SwitchProps, 'onChange'>>>`
  width: ${switchWidth};
`;

export const SwitchIcon = styled.div``;