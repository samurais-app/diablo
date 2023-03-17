import { IconProps } from '@ui/interfaces';
import React from 'react';
import classnames from 'classnames';
import withIcon from '@diabol/icon';
import { isString } from '@diabol/tool';
import { IconBox } from './styled';



const Icon = withIcon(function Icon({
  type,
  size,
  onClick,
  className
}: IconProps) {
  return (
    <IconBox
      onClick={onClick}
      className={classnames({ [className]: isString(className) })}
      size={size} width="1em" height="1em" fill='currentColor' aria-hidden focusable={false}>
      <use xlinkHref={`#${type}`} />
    </IconBox>
  );
});
export default Icon;