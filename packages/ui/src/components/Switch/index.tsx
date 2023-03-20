import { useUpdateEffect } from '@diabol/hooks';
import { isBoolean, isFunction } from '@diabol/tool';
import { isString } from '@diabol/tool';
import { SwitchProps } from '@ui/interfaces';
import React, { isValidElement, useCallback, useMemo, useState } from 'react';
import { SwitchBox, SwitchIcon, SwitchText } from './styled';

export default function Switch({
  value = false,
  size = 'small',
  className,
  active,
  inactive,
  activeIcon,
  inactiveIcon,
  onChange
}: SwitchProps) {
  const [status, setStatus] = useState(!!value);
  const _onChange = useCallback(() => {
    if (isFunction(onChange)) onChange(!status);
    setStatus(!status);
  }, [status, onChange]);
  const text = useMemo(() => {
    if (!isString(active) || !isString(inactive)) return undefined;
    return status ? active : inactive;
  }, [active, inactive, status]);

  const icon = useMemo(() => {
    if (!isValidElement(activeIcon) || !isValidElement(inactiveIcon)) return undefined;
    return status ? inactiveIcon : activeIcon;
  }, [activeIcon, inactiveIcon, status]);

  // 服务端渲染时外部状态与内部同步
  useUpdateEffect(() => {
    if (isBoolean(value) && value !== status) {
      setStatus(value);
    }
  }, [value]);

  return (
    <SwitchBox size={size} value={status} onClick={_onChange} className={className}>
      {text ? <SwitchText>1</SwitchText> : undefined}
      <SwitchIcon size={size} value={status}>
        {icon}
      </SwitchIcon>
    </SwitchBox>
  );
}