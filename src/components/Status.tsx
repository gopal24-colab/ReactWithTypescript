import React, { useState, useEffect } from "react";

type StatusCode = {
  status: "Loading" | "Error" | "Success";
};

const Status = (props: StatusCode) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus(props.status);
  }, [props]);

  return <div>Message {status}</div>;
};

export default Status;
