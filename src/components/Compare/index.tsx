import React, { useRef, useState } from 'react';
import { Resizable } from 're-resizable';
import { AbsoluteContainer, ClipContainer, CompareContainer, HandleContainer, InnerImage, KnobContainer } from '../styled/compare';

const Handle = () => (
  <HandleContainer>
    <KnobContainer>
      {/* <IconExpand /> */}
    </KnobContainer>
  </HandleContainer>
);

export default function Compare({ children }) {

  const a = children[0];
  const b = children[1];
  const [last, setLast] = useState(0);
  const [w, setW] = useState(50);
  const selfRef = useRef<HTMLElement>();

  const resizing = (e, dir, refToElement) => {
    const totalWidth = selfRef?.current?.getBoundingClientRect().width;
    const curWidth = refToElement.getBoundingClientRect().width;
    const newW = (curWidth / totalWidth) * 100;
    setW(newW);
  };

  const resizeStart = e => {
    setLast(e.screenX);
  };
  return (
    <CompareContainer>
      <Resizable
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        enable={{
          right: true,
        }}
        className="a"
        defaultSize={{
          width: '50%',
        }}
        lockAspectRatio={false}
        onResize={resizing}
        onResizeStart={resizeStart}
        handleComponent={{
          right: <Handle />,
        }}
        maxWidth={'100%'}
      />
      <ClipContainer
        style={{
          clipPath: `polygon(0 0, 0 100%, ${w}% 100%, ${w}% 0)`,
        }}
      >
        <InnerImage>{a}</InnerImage>
      </ClipContainer>
      <AbsoluteContainer ref={selfRef as any}>
        {b}
      </AbsoluteContainer>
    </CompareContainer>
  );
}