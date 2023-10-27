import React, { ReactNode, HTMLProps } from 'react';

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, style, ...props }) => {
  const containerStyle: React.CSSProperties = {
    padding: '80px',
  };

  return (
    <div style={{ ...containerStyle, ...style }} {...props}>
      {children}
    </div>
  );
};

export default Container;
