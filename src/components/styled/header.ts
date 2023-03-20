import { Layout, Switch } from '@ui/index';
import { headerBgImage, headerIconColor, headerPadding, headerIconMargin } from 'components/foundation/header';
import styled from 'styled-components';
import { IconComponent } from 'components/icon';


export const HeaderBox = styled(Layout.Header)`
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(10px);
  background-image: ${headerBgImage};
  padding: ${headerPadding};
  & svg {
    color: ${headerIconColor};
  }
`;

export const IconBox = styled(IconComponent)`
  margin-left: ${headerIconMargin};
`;

export const SwitchBox = styled(Switch)`
  margin-left: ${headerIconMargin};
`;