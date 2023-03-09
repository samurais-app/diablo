---
localeCode: zh-CN
order: 0
category: 组件
title:  Input 输入框 
icon: doc-divider 
brief: 分割线是一个呈线状的轻量化组件，用于有逻辑的组织元素内容和页面结构或区域。
---

## 代码演示

### 基本用法

```jsx live=true
import React from 'react';
import { Input } from '@diabol/ui';

<Input/>
```


### 数字输入值

```jsx live=true
import React from 'react';
import { Input } from '@diabol/ui';

<Input type="number" />

```

### 包含内容


## API参考

| 属性       | 说明                                   | 类型             | 默认值   | 版本 |
|-----------|----------------------------------------|-----------------|---------|--------- |
| type      | input输入类型                           | string          | text    |2.9.0 |
| size      | 组件大小                                | string          | small   | 2.9.0 |
