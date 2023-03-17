---
localeCode: zh-CN
order: 0
category: component
title:  Icon 图标
icon: icon
brief: Icon组件提供基础svg图标的使用方式，单色svg图标可以根据主题配色的变化和变动也可自己设置颜色。
---

## 代码演示

### 基本用法

```jsx live=true
import React from 'react';
import { Input, Icon } from '@diabol/ui';
<Icon type="icon-github" />
```


## API参考

| 属性     | 必输  | 说明                                   | 类型             | 默认值   | 版本 |
|---------|--------|------------------------------------ |-----------------|---------|--------- |
| type    | 是     | icon信息                                  | string          |     |0.4.0 |
| size    | 否     | 组件大小                                    | small、middle、large | small   | 0.4.0 |
| border  | 否     | 是否拥有边框                                | boolean        | false   | 0.4.0 |
