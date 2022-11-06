import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

export const Child = () => {
  const { user } = React.useContext(AuthContext);
  return <div>Hello "{user.userName}"</div>;
};
