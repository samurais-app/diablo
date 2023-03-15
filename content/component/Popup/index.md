---
localeCode: zh-CN
order: 0
category: component
title:  Popup 弹出层
icon: doc-divider 
brief: 分割线是一个呈线状的轻量化组件，用于有逻辑的组织元素内容和页面结构或区域。
---

## 代码演示

### 基本用法

```jsx live=true
import React, { useState } from 'react';
import { Popup, Text } from '@diabol/ui';

export default () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <div>
      <span onClick={() => setOpen(!open)}>打开</span>
      <Popup open={open} close onClonse={() => {
        setOpen(!open)
      }}>
        <div>
          <Text>1</Text>
          <span onClick={() => setOpen2(!open2)}>打开2</span>
          <Popup open={open2} close onClonse={() => {
            setOpen2(!open2)
          }}>
            <Text>2</Text>
          </Popup>
        </div>
      </Popup>
    </div>
  )
}
```

### 包含内容


## API参考

| 属性       | 说明                                   | 类型             | 默认值   | 版本 |
|-----------|----------------------------------------|-----------------|---------|--------- |
| type      | input输入类型                           | string          | text    |2.9.0 |
| size      | 组件大小                                | string          | small   | 2.9.0 |
