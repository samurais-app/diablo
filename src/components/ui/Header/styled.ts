import { Layout } from '@ui/index';
import { headerBgImage, headerIconColor } from 'components/foundation/header';
import styled from 'styled-components';


export const HeaderBox = styled(Layout.Header)`
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  background-image: ${headerBgImage};
  & svg {
    color: ${headerIconColor};
  }
`;