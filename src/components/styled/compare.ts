import styled from 'styled-components';


export const CompareContainer = styled.div`
    position: relative;
    width: 100%;

    & .image-no-border {
        margin: 0 !important;
    }

    & .a {
        z-index: 999;
        height: 100%;
    }
`;

export const HandleContainer = styled.div`
  height: 100%;
  /* background: var(--semi-color-primary); */
  width: 4px;
  position: relative;
`;

export const KnobContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  /* background: var(--semi-color-primary); */
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-45%, -50%);
  /* box-shadow: var(--semi-shadow-elevated); */
`;

export const ClipContainer = styled.div`
    z-index: 998;
    position: relative;
`;

export const InnerImage = styled.div`

`;

export const AbsoluteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  &.b {
    
  }
`;