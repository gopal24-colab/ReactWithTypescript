import React from "react";
import { GreetProps } from "../types/Greet.types";

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <>
        {props.isLoggedIn ? (
          <p>
            Welcome {props.name}!{" "}
            {props.messageCount && `Unread massages ${messageCount}`}
          </p>
        ) : (
          <p>Welcome Guest</p>
        )}
      </>
    </div>
  );
};

export default Greet;
