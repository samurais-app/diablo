---
localeCode: zh-CN
order: 0
category: component
title:  Popup 弹出层
icon: popup
brief: popup提供通用的弹出逻辑
---

## 代码演示

### 基本用法

```jsx live=true
import React, { useState } from 'react';
import { Popup, Input, Text } from '@diabol/ui';

export default () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <div>
      <Text onClick={() => setOpen(!open)}>打开</Text>
      <Popup open={open} close onClonse={() => {
        setOpen(!open)
      }}>
        <div>
          <Text>1</Text>
          <Text onClick={() => setOpen2(!open2)}>打开2</Text>
          <Popup open={open2} close onClonse={() => {
            setOpen2(!open2)
          }}>
            <Input />
          </Popup>
        </div>
      </Popup>
    </div>
  )
}
```

### 函数式调用

```jsx live=true
import React from 'react';
import { Popup, Text } from '@diabol/ui';

export default () => {
  function Com({ action }) {
    return <Text onClick={action.close}>1111</Text>
  }

  const {open, close} = Popup.useOpen({
    close: false,
    children: <Com />
  });

  return (
    <div>
      <Text onClick={open}>函数调用</Text>
    </div>
  );
}
```


## API参考

| 属性       | 说明                                   | 类型             | 默认值   | 版本 |
|-----------|----------------------------------------|-----------------|---------|--------- |
| type      | input输入类型                           | string          | text    |2.9.0 |
| size      | 组件大小                                | string          | small   | 2.9.0 |
