import React from "react";
import { ContainerProps } from "../types/Style.types";

const Container = (props: ContainerProps) => {
  return <div style={props.style}>Container</div>;
};

export default Container;
