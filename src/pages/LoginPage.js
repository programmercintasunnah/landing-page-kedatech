import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login min-vh-100 d-flex align-items-center justify-content-center w-100">
      <div className="form-login text-center" data-aos="fade-in">
        <h2 className="mb-4" data-aos="zoom-out" data-aos-delay="200">
          Login Form
        </h2>
        <form
          action=""
          className="needs-validation text-start mb-4"
          no-validate
          data-aos="zoom-out"
          data-aos-delay="400"
        >
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
          <button
            type="submit"
            className="sign-in btn btn-dark text-light w-100 mt-2"
          >
            SIGN IN
          </button>
        </form>
        <Link to="/">
          <i className="fa fa-home mx-2 text-primary"></i>
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
