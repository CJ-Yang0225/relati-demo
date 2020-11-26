import React from "react";

const Image = (props) => (
  <img
    {...props}
    src={`${process.env.PUBLIC_URL}/images/${props.src}`}
    alt={props.src}
  />
);

export default Image;
