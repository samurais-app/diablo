---
localeCode: zh-CN
order: 0
category: component
title:  Navigation 导航栏 
icon: doc-divider 
brief: 分割线是一个呈线状的轻量化组件，用于有逻辑的组织元素内容和页面结构或区域。
---

## 代码演示

### 基本用法

```jsx live=true
import React from 'react';
import {navigate} from 'react-router-dom';
import { Navigation } from '@diabol/ui';
<Navigation onChange={navigate}>
  <Navigation.Item path="/component" title="组件">
    <Navigation.Item path="/component/Navigation" title="导航组件" />
    <Navigation.Item path="/component/Input" title="输入" />
  </Navigation.Item>
  <Navigation.Item path="/start" title="开始">
    <Navigation.Item path="/start/changelog" title="更新日志" />
  </Navigation.Item>
</Navigation>
```

### 包含内容


## API参考

| 属性       | 说明                                   | 类型             | 默认值   | 版本 |
|-----------|----------------------------------------|-----------------|---------|--------- |
| type      | input输入类型                           | string          | text    |2.9.0 |
| size      | 组件大小                                | string          | small   | 2.9.0 |
