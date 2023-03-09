import { ThemeWithProps } from '@ui/interfaces';
import { contentPadding } from 'components/foundation/content';
import styled from 'styled-components';


export const ContentBox = styled.div<ThemeWithProps<object>>`
  padding: ${contentPadding};
`;