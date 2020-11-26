import React from "react";

const Button = ({ type, style, ...props }) => {
  return (
    <div
      style={{
        ...style,
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: 'gray',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/button/${type}.svg)`
      }}
      {...props}
    ></div>
  );
};

export default Button;
