import styled from 'styled-components';


export const CodeBox = styled.div`
  width: 100%;
  max-height: 400px;
  display: flex;
  border-radius: 10px !important;
  overflow: auto;
  & > div:first-child {
    border: none !important;
    border-radius: 0 !important;
    border-top-left-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
    border: 1px solid #E9E9E9 !important;
    border-right: none !important;
    & > div {
      width: 100%;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
    }
  }
  & > div:last-child {
    border: none !important;
    border-radius: 0 !important;
    flex: 1;
    padding: 0 10px !important;
    background-color: #011627 !important;

    caret-color:#fff !important;
    & > div {
      background-color: #011627 !important;
    }
  }
  & .token.imports.maybe-class-name, & .token.tag.attr-value.punctuation.attr-equals, & .token.plain-text, & .token.string {
    color: #E4E4E4 !important;
  }
  & .token.tag.attr-value, & .token.tag.attr-name, & .token.tag, & .token.keyword {
    color: #c792ea !important;
  }
`;