import React from 'react';

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{children}</Tag>;
};

export default Heading;
