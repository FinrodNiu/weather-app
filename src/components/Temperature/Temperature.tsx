import React from 'react';

interface ITemperatureProps {
  children: React.ReactNode,
}
const Temperature: React.FC<ITemperatureProps> = ({
  children,
}) => (
  <span>
    {children}
    <span>&nbsp;</span>
    <span>&#176;</span>
  </span>
);

export default Temperature
