import React from "react";
import { PersonProp } from "../types/Person.types";

const Person = ({ name: { first, last } }: PersonProp) => {
  return (
    <div>
      Welcome {first} {last} to Typescript React module
    </div>
  );
};

export default Person;
