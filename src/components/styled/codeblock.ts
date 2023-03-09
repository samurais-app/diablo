import styled from 'styled-components';


export const CodeBox = styled.div`
  width: 100%;
  overflow: auto;
  & .token {
    font-family: Menlo, Consolas, "Droid Sans Mono", monospace !important;
  }
  /* & .token.imports.maybe-class-name, & .token.tag.attr-value.punctuation.attr-equals, & .token.plain-text, & .token.string {
    color: #E4E4E4 !important;
  }
  & .token.tag.attr-value, & .token.tag.attr-name, & .token.tag, & .token.keyword {
    color: #c792ea !important;
  } */
`;

export const ViewBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
  border-radius: 14px !important;
  overflow: hidden !important;
`;