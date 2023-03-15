import React, { useState } from 'react';
import { useView } from 'react-view';
import presetTypescript from '@babel/preset-typescript';
import { Input, ThemeConfig, Navigation, Popup } from '@ui/index';
import { CodeBox, CompilerCom, EditorCom, ErrorCom, ViewBox } from 'components/styled/codeblock';

export default function CodeBlock({ code }: {
  code: string;
}) {
  const params = useView({
    initialCode: `${code}`,
    scope: {
      Input,
      ThemeConfig,
      Navigation,
      Popup,
      React,
      useState
    },
    imports: {
      '@diabol/ui': {
        named: ['Input', 'ThemeConfig', 'Navigation', 'Popup', 'React', 'useState'],
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