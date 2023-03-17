import { codeMinWidth, codeViewBg, codeViewBorder, previewBg } from 'components/foundation/codeblock';
import styled from 'styled-components';
import { Compiler, Editor, Error } from 'react-view';


export const CodeBox = styled.div`
  width: 100%;
  overflow: auto;
  & .token {
    font-family: Menlo, Consolas, "Droid Sans Mono", monospace !important;
  }
  & .token-line, & .token {
    white-space: inherit;
    /* overflow: hidden; */
  }
  & .token.keyword, & .token.imports.maybe-class-name {
    color: #b9b9b9;
  }
`;

export const ViewBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
  border-radius: 14px !important;
  overflow: hidden !important;
`;

export const CompilerCom = styled(Compiler)`
  border: none !important;
  padding: 10px !important;
  border-radius: 14px !important;
  border: ${codeViewBorder} !important;
  background-color: ${previewBg};
  box-sizing: border-box;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditorCom = styled(Editor)`
    max-height: 400px;
    overflow: auto;
    border: none !important;
    border-radius: 0 !important;
    flex: 1;
    padding: 10px !important;
    background-color: ${codeViewBg} !important;

    caret-color:#FFFFFF !important;
    & > div {
      width: fit-content;
      background-color: ${codeViewBg} !important;
    }
    & pre {
      min-width: ${codeMinWidth} !important;
      white-space: nowrap !important;
    }
`;

export const ErrorCom = styled(Error)`
  width: 100%;
  border: none !important;
  padding: 10px !important;
  background-color: #b22424;
  color: #fff;
  font-size: 12px;
  box-sizing: border-box;
`;