import React from "react";
import { InputProps } from "../types/Input.typess";

const Input = ({ InputFor, changeHandel, title, type, value }: InputProps) => {
  return (
    <>
      <label htmlFor={InputFor}>{title}</label>
      <input type={type} onChange={changeHandel} value={value} />
    </>
  );
};

export default Input;
