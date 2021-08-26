import React from 'react';

interface IVerticalDividerProps {
  color: string;
  width: string;
}
const VerticalDivider: React.FC<IVerticalDividerProps> = ({
  color,
  width,
}) => (
  <div 
    style={{
      width,
      backgroundColor: color,
    }} 
  />
);

export default VerticalDivider;