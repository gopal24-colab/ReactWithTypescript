import React from "react";
import { OscarProps } from "../types/Oscar.types";

const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
