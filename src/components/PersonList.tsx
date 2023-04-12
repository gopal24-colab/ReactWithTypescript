import React from "react";
import { Name } from "../types/Person.types";

type namesProp = {
  names: Name[];
};

const PersonList = (prop: namesProp) => {
  return (
    <div>
      {prop.names.map((name: { first: string; last: string }) => {
        return (
          <p key={name.first + " " + name.last}>
            {name.first}
            {name.last}
          </p>
        );
      })}
    </div>
  );
};

export default PersonList;
