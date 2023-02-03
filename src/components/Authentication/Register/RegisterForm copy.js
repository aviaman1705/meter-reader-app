import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useReducer, useState } from "react";
import {
  nameReducer,
  emailReducer,
  passwordReducer,
} from "../../../helper/ValidationHelper";

const RegisterForm = () => {
  return (
    <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
      <div class="card card-plain">
        <div class="card-header">
          <h4 class="font-weight-bolder">Sign Up</h4>
          <p class="mb-0">Enter your email and password to register</p>
        </div>
        <div class="card-body">
          <form role="form">
            <div class="input-group input-group-outline mb-3">
              <label class="form-label">Name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="input-group input-group-outline mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" />
            </div>
            <div class="input-group input-group-outline mb-3">
              <label class="form-label">Password</label>
              <input type="password" class="form-control" />
            </div>
            <div class="form-check form-check-info text-start ps-0">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked
              />
              <label class="form-check-label" for="flexCheckDefault">
                I agree the{" "}
                <a href="javascript:;" class="text-dark font-weight-bolder">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <div class="text-center">
              <button
                type="button"
                class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div class="card-footer text-center pt-0 px-lg-2 px-1">
          <p class="mb-2 text-sm mx-auto">
            Already have an account?
            <a
              href="../pages/sign-in.html"
              class="text-primary text-gradient font-weight-bold"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
