import { isFunction } from '@diabol/tool';
import { SwitchProps } from '@ui/interfaces';
import React, { useCallback, useState } from 'react';
import { SwitchBox, SwitchIcon } from './styled';

export default function Switch({
  value = false,
  size = 'small',
  onChange
}: SwitchProps) {
  const [status, setStatus] = useState(!!value);
  const _onChange = useCallback(() => {
    if (isFunction(onChange)) onChange(!status);
    setStatus(!status);
  }, [status, onChange]);

  return (
    <SwitchBox size={size} value={value} onClick={_onChange}>
      <SwitchIcon>
        1
      </SwitchIcon>
    </SwitchBox>
  );
}