import React from 'react';
import { useView, Compiler, Editor, Error } from 'react-view';
import presetTypescript from '@babel/preset-typescript';
import styled from 'styled-components';
import { Input, ThemeConfig } from '@ui/index';
import { CodeBox, ViewBox } from 'components/styled/codeblock';
import { codeViewBorder } from 'components/foundation/codeblock';

const CompilerCom = styled(Compiler)`
  border: none !important;
  padding: 10px !important;
  border-radius: 14px !important;
  border: ${codeViewBorder} !important;
  box-sizing: border-box;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
`;

const EditorCom = styled(Editor)`
    max-height: 400px;
    border: none !important;
    border-radius: 0 !important;
    flex: 1;
    padding: 10px !important;
    background-color: #011627 !important;

    caret-color:#fff !important;
    & > div {
      background-color: #011627 !important;
    }
`;

const ErrorCom = styled(Error)`
  width: 100%;
  border: none !important;
  padding: 10px !important;
  background-color: #e94343;
  color: #fff;
  font-size: 12px;
  box-sizing: border-box;
`;

export default function CodeBlock({ code }: {
  code: string;
}) {
  const params = useView({
    initialCode: `${code}`,
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
  console.log(params.compilerProps);
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