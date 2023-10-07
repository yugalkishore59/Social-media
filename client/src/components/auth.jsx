import React, { useState } from "react";
import "../styles/auth.scss";
import useAuthStore from "../store/user";

const Auth = () => {
  const signUp = useAuthStore((state) => state.signUp);
  const signIn = useAuthStore((state) => state.signIn);

  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [isSignUp, toggleSignUp] = useState(false);
  function handleSignUpSignIn() {
    setAuthData({
      username: "",
      email: "",
      password: "",
    });
    toggleSignUp(!isSignUp);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      signUp(authData);
    } else {
      signIn(authData);
    }
  };

  return (
    <div className="auth_container">
      <div className="auth_form_container">
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">
                @
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                placeholder="Username"
                required
                id="username"
                value={authData.username}
                onChange={(e) =>
                  setAuthData({ ...authData, username: e.target.value })
                }
              />
            </div>
          )}
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              placeholder="Email Address"
              value={authData.email}
              onChange={(e) =>
                setAuthData({ ...authData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
              placeholder="Password"
              value={authData.password}
              onChange={(e) =>
                setAuthData({ ...authData, password: e.target.value })
              }
            />
          </div>
          {isSignUp && (
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                required
                placeholder="Repeat Password"
                value={authData.repeatPassword}
                onChange={(e) =>
                  setAuthData({ ...authData, repeatPassword: e.target.value })
                }
              />
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <hr />
          <button onClick={handleSignUpSignIn} className="btn btn-success">
            {isSignUp ? "Already signed up? Sign In" : "Create new account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
