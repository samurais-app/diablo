import { ThemeWithProps } from '@ui/interfaces';
import { emptyBoxBg, emptyBoxTop } from 'components/foundation/404';
import { IEmptyPageProps } from 'components/interfaces/404';
import styled from 'styled-components';


export const EmptyBox = styled.div<ThemeWithProps<IEmptyPageProps>>`
  width: 100vw;
  height:inherit;
  box-sizing: border-box;
  background-color: ${emptyBoxBg};
`;