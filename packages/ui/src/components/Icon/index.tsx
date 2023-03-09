import { IconProps } from '@ui/interfaces';
import React from 'react';
import classnames from 'classnames';
import { IconBox } from './styled';
import { isString } from '@diabol/tool';



export default function Icon({
  type,
  size,
  className
}: IconProps) {
  return (
    <IconBox className={classnames({ [className]: isString(className) })} size={size} width="1em" height="1em" fill='currentColor' aria-hidden focusable={false}>
      <use xlinkHref={`#${type}`} />
    </IconBox>
  );
}