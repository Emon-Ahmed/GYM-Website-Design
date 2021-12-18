import React from "react";
import { useSelector } from "react-redux";

export default function Details() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <p> Your Email: {user?.email}</p>
    </div>
  );
}
