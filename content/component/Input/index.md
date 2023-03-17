---
localeCode: zh-CN
order: 0
category: component
title:  Input 输入框 
icon: input 
brief: Input提供基础的信息输入功能
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

### 搜索框

```jsx live=true
import React from 'react';
import { Input } from '@diabol/ui';

<Input type="search" />
```


## API参考

| 属性       | 说明                  | 类型                           | 默认值   | 版本 |
|-----------|----------------------|--------------------------------|---------|--------- |
| type      | input输入类型         | text、number、password、search   | text    |0.4.0     |
| size      | 组件大小              | small、middle、large                          | small   | 0.4.0    |
| border    | 是否拥有边框           | boolean                         | false   | 0.4.0    |
| prefix     | 前缀                  | JSX.Element、string             | empty      | 0.4.0   |
| suffix     | 后缀                 | JSX.Element、string             | empty      | 0.4.0   |
