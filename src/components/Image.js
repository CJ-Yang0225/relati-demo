import React from "react";

const Image = props => (
  <img {...props} src={`${process.env.PUBLIC_URL}${props.src}`} />
);

export default Image;
