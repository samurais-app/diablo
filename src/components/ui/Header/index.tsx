import React, { useContext } from 'react';
import { Icon, IHeaderBaseProps, Switch, ThemeContent } from '@ui/index';
import { dark, light } from 'config/theme';
import { HeaderBox, IconBox } from './styled';



export default function Header({ children, ...props }: IHeaderBaseProps) {
  const { update } = useContext(ThemeContent);
  return (
    <HeaderBox
      actions={[
        <Switch key="sw" activeIcon={<Icon type="icon-sam" />} inactiveIcon={<Icon type="icon-soon" />} onChange={(e) => {
          update(e ? dark : light);
        }} />,
        <IconBox type='icon-github' size={20} key="icon" />
      ]}
      {...props}
    >
      {children}
    </HeaderBox>
  );
}