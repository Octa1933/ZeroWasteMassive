import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useStore from "../store/useStore";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();

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
        const response = await axios.post("http://localhost:3000/api/user/login", values);

        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data.data));
          setUser(response.data.data);
          console.log("Login successful", response.data);
          navigate("/pesan")
        } else {
          setErrors({ api: "Login failed, please try again" });
          console.error("Login failed", response);
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
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
    <div className="limiter" style={{ width: "60%", marginTop: "10%", marginBottom: "10%" }}>
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={formik.handleSubmit}>
            <span className="login100-form-title p-b-43">
              <b>Login</b>
              <br />
              <p style={{ fontSize: 14, lineHeight: "1.7", color: "#666666", margin: 0, fontFamily: "Poppins-Regular" }}>
                Please enter your login details to start having fun!
              </p>
            </span>

            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input
                className="input100"
                type="text"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <span className="focus-input100" />
              <span className="label-input100">Email</span>
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="wrap-input100 validate-input" data-validate="Password is required">
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
            </div>

            <div className="flex-sb-m w-full p-t-3 p-b-32">
              <div className="contact100-form-checkbox">
                <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                <label className="label-checkbox100" htmlFor="ckb1">
                  Ingat informasi saya
                </label>
              </div>
              <div>
                <a href="#" className="txt1">
                  <b>Lupa password?</b>
                </a>
              </div>
            </div>

            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn" disabled={formik.isSubmitting}>
                Login
              </button>
            </div>

            {formik.errors.api && (
              <div style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
                {formik.errors.api}
              </div>
            )}

            <div className="text-center p-t-46 p-b-20">
              <span className="txt2">
                Tidak mempunyai akun? <Link to="/register"><b style={{ color: "#309434" }}>Sign up</b></Link>
              </span>
            </div>

            <div className="text-center p-t-0 p-b-10">
              <span className="txt3">
                ----------------Atau lanjut dengan--------------------
              </span>
            </div>

            <div className="login100-form-social flex-c-m">
              <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
                <i className="fa fa-facebook-f" aria-hidden="true" />
              </a>
              <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
                <i className="fa fa-google" aria-hidden="true" />
              </a>
              <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
                <i className="fa fa-apple" aria-hidden="true" />
              </a>
            </div>
          </form>
          <div className="login100-more" style={{ backgroundImage: 'url("assets/Login/images/bglogin.png")' }} />
        </div>
      </div>
    </div>
  );
};

export default Login;
