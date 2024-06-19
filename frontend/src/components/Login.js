import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useStore from "../store/useStore";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/user/login",
          values
        );

        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data.data));
          setUser(response.data.data);
          console.log("Login successful", response.data);
          navigate("/layanan");
        } else {
          setErrors({ api: "Login failed, please try again" });
          console.error("Login failed", response);
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setErrors({ api: error.response.data.message });
        } else {
          setErrors({ api: "An error occurred, please try again" });
        }
        console.error("An error occurred", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      className="limiter"
      style={{ width: "60%", marginTop: "4%", marginBottom: "4%" }}
    >
      <div className="container-login100">
        <div className="wrap-login100">
          <form
            className="login100-form validate-form"
            onSubmit={formik.handleSubmit}
          >
            <span className="p-b-43">
              <h1 className="color-primary header-1 primary fw-bold">Login</h1>
              <p>Please enter your login details to start having fun!</p>
            </span>

            <div class="mb-3 mt-4">
              <label for="email" class="form-label primary">
                Email
              </label>
              <input
                type="email"
                class="form-control-lg w-full"
                id="email"
                placeholder="name@example.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger mt-2">{formik.errors.email}</div>
              ) : null}
            </div>

            <div class="mb-3 position-relative">
              <label for="password" class="form-label primary">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                class="form-control-lg w-full"
                id="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </span>

              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger mt-2">{formik.errors.password}</div>
              ) : null}
            </div>

            {/* <div onClick={togglePasswordVisibility}>Toggle</div> */}

            <div className="flex-sb-m w-full p-t-3 p-b-32 mt-4 d-flex justify-content-between">
              <div className="d-flex gap-2">
                <input
                  className="form-check-input checkbox-primary"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label className="form-check-label" htmlFor="ckb1">
                  Ingat informasi saya
                </label>
              </div>
              <div>
                <a href="#" className="">
                  <b>Lupa password?</b>
                </a>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="btn-primary"
                disabled={formik.isSubmitting}
              >
                Log in
              </button>
            </div>

            {formik.errors.api && <div>{formik.errors.api}</div>}

            <div className=" p-t-46 p-b-20 mt-4">
              <span className="">
                Tidak mempunyai akun?{" "}
                <Link to="/register">
                  <b style={{ color: "#309434" }}> Sign up</b>
                </Link>
              </span>
            </div>

            <div className="mt-5 d-flex align-items-center gap-4 w-full">
              <div className="border-top flex-grow-1"></div>
              <span>Atau lanjut dengan</span>
              <div className="border-top flex-grow-1"></div>
            </div>

            <div className="login100-form-social flex-c-m d-flex justify-content-between mx-2 mt-4">
              <a href="#" className="avatar-circle">
                <img
                  className="social-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg"
                  alt=""
                />
              </a>
              <a href="#" className="avatar-circle">
                <img
                  className="social-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt=""
                />
                {/* <i className="fa fa-twitter" aria-hidden="true" /> */}
              </a>
              <a href="#" className="avatar-circle">
                <img
                  className="social-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                  alt=""
                />
                {/* <i className="fa fa-google" aria-hidden="true" /> */}
              </a>
              <a href="#" className="avatar-circle">
                <img
                  className="social-icon"
                  src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
                  alt=""
                />
                {/* <i className="fa fa-apple" aria-hidden="true" /> */}
              </a>
            </div>
          </form>

          <div
            className="login100-more"
            style={{
              backgroundImage: 'url("assets/Login/images/bglogin.png")',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
