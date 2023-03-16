import { textColor, titleColor } from '@ui/foundation';
import { ITextProps, ITitleProps, ThemeWithProps } from '@ui/interfaces';
import styled from 'styled-components';


export const TextBox = styled.span<ThemeWithProps<ITextProps>>`
  color: ${textColor};
`;


export const H1 = styled.h1<ThemeWithProps<Omit<ITitleProps, 'type'>>>`
  color: ${titleColor}
`;

export const H2 = styled.h2<ThemeWithProps<Omit<ITitleProps, 'type'>>>`
  color: ${titleColor}
`;

export const H3 = styled.h3<ThemeWithProps<Omit<ITitleProps, 'type'>>>`
  color: ${titleColor}
`;

export const H4 = styled.h4<ThemeWithProps<Omit<ITitleProps, 'type'>>>`
  color: ${titleColor}
`;

export const H5 = styled.h5<ThemeWithProps<Omit<ITitleProps, 'type'>>>`
  color: ${titleColor}
`;

export const H6 = styled.h6<ThemeWithProps<Omit<ITitleProps, 'type'>>>`
  color: ${titleColor}
`;