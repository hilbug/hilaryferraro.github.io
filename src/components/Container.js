import React from "react";

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Container;

// Week 19 - Act 20