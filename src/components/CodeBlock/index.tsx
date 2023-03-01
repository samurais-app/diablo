import React from 'react';
import { useView, Compiler, Editor, Error } from 'react-view';
import { Input, ThemeConfig } from '@ui/index';
import { CodeBox } from './index.styled';

export default function CodeBlock({ code }: {
  code: string;
}) {
  const params = useView({
    initialCode: `${code
      }`,
    scope: {
      Input,
      ThemeConfig
    },
    imports: {
      '@diablo/ui': {
        named: ['Input', 'ThemeConfig'],
      },
    },
    onUpdate: console.log,
  });

  return (
    <CodeBox>
      <Compiler {...params.compilerProps} />
      <Editor {...params.editorProps} language="tsx" />
      <Error {...params.errorProps} />
    </CodeBox>
  );
}