import React from "react";

type HeadingProps = {
  children: string;
};

const Heading = (props: HeadingProps) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
};

export default Heading;
