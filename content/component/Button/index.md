---
localeCode: zh-CN
order: 0
category: component
title:  Button 按钮
icon: button
brief: 基础按钮组件
---

## 代码演示

### 基本用法

```jsx live=true
import React from 'react';
import { Button } from '@diabol/ui';

export default function() {
  const [status, setStatus] = useState(false);



  return (
    <Button loading={status} onClick={() => setStatus(!status)}>默认</Button>
  );
}
```


## API参考

| 属性     | 必输  | 说明                                   | 类型             | 默认值   | 版本 |
|---------|--------|------------------------------------ |-----------------|---------|--------- |
