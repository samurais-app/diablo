import { headerBorder, headerHeight, headerPadding, headerPosition } from '@ui/foundation';
import { IHeaderBaseProps } from '@ui/interfaces';
import styled from 'styled-components';


export const HeaderBox = styled.div<IHeaderBaseProps>`
  width: 100vw;
  height: ${headerHeight};
  padding: ${headerPadding};
  position: ${headerPosition};
  box-sizing: border-box;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 1000;
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  border-bottom: 1px solid ${headerBorder};
  background-image: radial-gradient(transparent 1px, #fff 1px);
`;