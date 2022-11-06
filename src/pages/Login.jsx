import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

export const Login = () => {
  const [values, setValues] = useState({
    userName: "",
    password: ""
  });

  const { setUser, setIsLoggedIn } = React.useContext(AuthContext);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleLogin = () => {
    setUser({ userName: values["userName"] });
    setIsLoggedIn(true);
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label>Username</label>
        <input
          className="form-control"
          name="userName"
          type="text"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          name="password"
          type="password"
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="btn btn-primary" type="submit">
        login
      </button>
    </form>
  );
};
