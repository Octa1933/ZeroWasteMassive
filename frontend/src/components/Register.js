import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useStore from "../store/useStore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nama lengkap harus diisi"),
      email: Yup.string()
        .email("Alamat email tidak valid")
        .required("Email harus diisi"),
      password: Yup.string()
        .min(6, "Password minimal 6 karakter")
        .required("Password harus diisi"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/user/register",
          values
        );

        if (response.status === 201) {
          setUser(response.data.data);
          console.log("Registration successful", response.data);
          navigate("/login");
        } else {
          setErrors({ api: "Registration failed, please try again" });
          console.error("Registration failed", response);
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          const validationErrors = error.response.data.errors;
          const errorMessage = validationErrors
            .map((error) => error.msg)
            .join(", ");
          setErrors({ api: errorMessage });
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.statusCode === 409
        ) {
          setErrors({
            api: "Email already exists, please use a different email address",
          });
        } else if (
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
              <h1 className="color-primary header-1 primary fw-bold">
                Sign Up
              </h1>
              <p>Daftarkan Akun anda gratis!</p>
            </span>

            <div class="mb-3 mt-4">
              <label for="name" class="form-label primary">
                Nama Lengkap
              </label>
              <input
                type="text"
                class="form-control-lg w-full"
                id="name"
                placeholder="name@example.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger mt-2">{formik.errors.name}</div>
              ) : null}
            </div>

            <div class="mb-3">
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

            {/* <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              <span className="focus-input100" />
              <span className="label-input100">Nama Lengkap</span>
              {formik.touched.name && formik.errors.name ? (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="text"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <span className="focus-input100" />
              <span className="label-input100">Alamat Email</span>
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <span className="focus-input100" />
              <span className="label-input100">Password</span>
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
            </div> */}

            {formik.errors.api && (
              <div
                style={{ color: "red", marginTop: "10px", textAlign: "center" }}
              >
                {formik.errors.api}
              </div>
            )}

            <div className="flex-sb-m w-full p-t-3 p-b-32 mt-4 d-flex justify-content-between">
              <div className="d-flex gap-2">
                <input
                  className="form-check-input checkbox-primary"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label className="form-check-label" htmlFor="ckb1">
                  Anda menyetujui syarat dan{" "}
                  <a href="#" className="underline black">
                    {" "}
                    kebijakan privasi kami{" "}
                  </a>
                </label>
              </div>
            </div>

            {/* <div className="flex-sb-m w-full p-t-3 p-b-32">
              <div className="contact100-form-checkbox">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="terms"
                />
                <label className="label-checkbox100" htmlFor="ckb1">
                  Anda menyetujui syarat dan kebijakan privasi kami
                </label>
              </div>
            </div> */}

            <div className="mt-4">
              <button
                type="submit"
                className="btn-primary"
                disabled={formik.isSubmitting}
              >
                Sign Up
              </button>
            </div>

            <div className=" p-t-46 p-b-20 mt-4">
              <span className="">
                Sudah mempunyai akun?{" "}
                <Link to="/login">
                  <b style={{ color: "#309434" }}> Login</b>
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

export default Register;
