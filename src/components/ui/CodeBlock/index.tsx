import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { useView } from 'react-view';
import presetTypescript from '@babel/preset-typescript';
import { Input, ThemeConfig, Navigation, Popup, Text, Icon } from '@ui/index';
import * as Component from '@ui/index';
import { CodeBox, CompilerCom, EditorCom, ErrorCom, ViewBox } from 'components/styled/codeblock';
import { isFunction } from '@tools/index';


function createScope(com: Record<string, any>) {
  return Object.entries(com).reduce((a, b) => {
    if (isFunction(b[1])) {
      a[b[0]] = b[1];
      return a;
    }
    return a;
  }, {
    React,
    navigate,
    useState
  });
}

function createKeys(com: Record<string, any>) {
  return Object.entries(com).reduce((a, b) => {
    if (isFunction(b[1])) {
      return a.concat([b[0]]);
    }
    return a;
  }, []);
}

const scope = createScope(Component);
const nameds = createKeys(Component);

export default function CodeBlock({ code }: {
  code: string;
}) {
  const params = useView({
    initialCode: `${code}`,
    scope,
    imports: {
      'react-router-dom': {
        named: ['navigate']
      },
      'react': {
        named: ['React', 'useState']
      },
      '@diabol/ui': {
        named: nameds,
      },
    },
    onUpdate: console.log,
  });
  return (
    <CodeBox>
      <CompilerCom presets={[presetTypescript]} {...params.compilerProps} />
      <ViewBox>
        <EditorCom {...params.editorProps} language="tsx" />
        <ErrorCom {...params.errorProps} />
      </ViewBox>
    </CodeBox>
  );
}