import React from "react";

const LoginComponent = () => {
  return (
    <div className="login min-vh-100 d-flex align-items-center justify-content-center w-100">
      <div className="form-login">
        <h2>Login Form</h2>
        <form action="" className="needs-validation" no-validate>
          <div className="form-group mb-2 was-validated">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              className="form-control"
              placeholder="Enter your email"
              required
              type="email"
            />
            <div className="invalid-feedback">Please enter your email</div>
          </div>
          <div className="form-group mb-2 was-validated">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              placeholder="Enter your password"
              required
              type="password"
            />
            <div className="invalid-feedback">Please enter your password</div>
          </div>
          <div className="form-group form-check mb-2">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label" htmlFor="checkbox">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-success w-100 mt-2">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
