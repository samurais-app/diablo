import { ThemeWithProps } from '@ui/interfaces';
import { contentPadding } from 'components/foundation/content';
import { IContentProps } from 'components/interfaces/content';
import styled from 'styled-components';


export const ContentBox = styled.div<ThemeWithProps<IContentProps>>`
  padding: ${contentPadding};
`;