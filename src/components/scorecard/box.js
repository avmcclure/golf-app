import React from 'react';
import { oneOfType, string, number, func } from 'prop-types';

Box.propTypes = {
  className: string,
  label: oneOfType([number, string]).isRequired,
  children: oneOfType([func, number, string])
};

function Box(props) {
  const {className, label, children} = props;
  return (
    <div className={`box ${className}`}>
      <div className="label">{label}</div>
      <div className="value">{children}</div>
    </div>
  );
}

export default Box;
