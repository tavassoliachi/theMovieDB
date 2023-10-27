import React, { useEffect, useRef } from 'react';

interface Props {
  text: string;
  width: string;
  style?: React.CSSProperties;
}

const TruncateOnSecondLine = ({ text, width, style }: Props) => {
  const firstLineRef = useRef<HTMLDivElement>(null);
  const secondLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = firstLineRef.current;

    if (element) {
      const maxWidth = element.clientWidth;
      const textWidth = element.scrollWidth;
      if (textWidth > maxWidth) {
        const charWidth = textWidth / text.length;
        const numCharPerLine = Math.trunc(maxWidth / charWidth);

        const lastSpaceIndex = text.lastIndexOf(' ', numCharPerLine);

        const firstLineText =
          lastSpaceIndex !== -1
            ? text.substring(0, lastSpaceIndex)
            : text.substring(0, numCharPerLine);
        const secondLineText = text.substring(firstLineText.length).trim();

        if (firstLineRef.current) {
          firstLineRef.current.innerText = firstLineText;
        }
        if (secondLineRef.current) {
          secondLineRef.current.innerText = secondLineText;
        }
      }
    }
  }, [text]);

  return (
    <div style={{ width, ...style }}>
      <div ref={firstLineRef} style={{ whiteSpace: 'nowrap' }}>
        {text}
      </div>
      <div
        ref={secondLineRef}
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      ></div>
    </div>
  );
};

export default TruncateOnSecondLine;
