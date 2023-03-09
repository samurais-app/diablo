import { headerBorder, headerHeight, headerPadding, headerPosition } from '@ui/foundation';
import { IHeaderBaseProps } from '@ui/interfaces';
import styled from 'styled-components';


export const HeaderBox = styled.div<Omit<IHeaderBaseProps, 'children'>>`
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
  border-bottom: 1px solid ${headerBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const HeaderContent = styled.div`
  flex: 1;
`;

export const HeaderLogo = styled.div``;

export const ActionButton = styled.div``;

export const ActionContent = styled.div`
  position: absolute;
  right: 0;
`;