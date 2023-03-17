// 大纲

import { useRenderEffect } from '@hooks/index';
import { isArray } from '@tools/index';
import { IOutlineItemProps, IOutlineProps } from 'components/interfaces/outline';
import { OutlineItem, OutlineLink, OutlineList } from 'components/styled/outline';
import React, { Children, cloneElement, createElement, isValidElement, ReactElement, useRef, useState } from 'react';

function mergeIndex(childs: ReactElement<IOutlineItemProps>[], node = []): ReactElement<IOutlineItemProps>[] {
  return childs.reduce((nodes, item) => {
    const { props: { children } } = item;
    const list = (isArray(children) ? children : [children]).filter(isValidElement) as ReactElement<IOutlineItemProps>[];
    node.push(item);
    if (list.length) {
      return nodes.concat([cloneElement(item, { index: node.length - 1, children: mergeIndex(list, node) })]);
    }
    return nodes.concat([cloneElement(item, { index: node.length - 1 })]);
  }, []);
}

export default function Outline(props: Omit<IOutlineProps, 'isChild' | 'height' | 'itemHeight' | 'index'>) {
  const dom = useRef<HTMLUListElement>();
  const itemdom = useRef<HTMLLIElement>();
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState<{
    ul?: number,
    li?: number,
  }>({});
  const _children = mergeIndex(isArray(props.children) ? props.children : [props.children]);
  const renderItem = (childs: ReactElement<IOutlineItemProps>[]) => {
    return Children.map(childs, (item) => {
      const { children, title } = item.props;
      if (!children || (isArray(children) && !children.length)) return cloneElement(item, {
        onClick: (e) => {
          e.stopPropagation();
          setIndex(item.props.index);
        },
        children: createElement(OutlineLink, { children: title, href: item.props.path }) as JSX.Element,
        ref: !itemdom.current ? itemdom : undefined
      } as any);
      const items = isArray(children) ? children : [children];
      return cloneElement(item, {
        onClick: (e) => {
          e.stopPropagation();
          setIndex(item.props.index);
        },
        children: [
          createElement(OutlineLink, {
            key: item.props.path,
            children: title,
            href: item.props.path
          }),
          createElement(OutlineList, {
            key: `${item.props.path}-list`,
            isChild: true,
            children: renderItem(items)
          })
        ]
      });
    });
  };

  useRenderEffect(() => {
    setHeight({
      ul: dom.current?.getBoundingClientRect().height ?? 0,
      li: itemdom.current?.getBoundingClientRect().height ?? 0,
    });
  }, []);

  return (
    <OutlineList ref={dom} index={index} height={height.ul} itemHeight={height.li}>
      {renderItem(_children)}
    </OutlineList>
  );
}

Outline.Link = OutlineItem;
