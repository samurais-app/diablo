import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { useView } from 'react-view';
import presetTypescript from '@babel/preset-typescript';
import { Input, ThemeConfig, Navigation, Popup, Text } from '@ui/index';
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
      Text,
      Popup,
      React,
      navigate,
      useState
    },
    imports: {
      'react-router-dom': {
        named: ['navigate']
      },
      '@diabol/ui': {
        named: ['Input', 'ThemeConfig', 'Navigation', 'Popup', 'Text', 'React', 'useState'],
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