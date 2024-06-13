import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useStore from "../store/useStore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nama lengkap harus diisi"),
      email: Yup.string().email("Alamat email tidak valid").required("Email harus diisi"),
      password: Yup.string().min(6, "Password minimal 6 karakter").required("Password harus diisi"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await axios.post("http://localhost:3000/api/user/register", values);
    
        if (response.status === 201) {
          setUser(response.data.data);
          console.log("Registration successful", response.data);
          navigate("/login")
        } else {
          setErrors({ api: "Registration failed, please try again" });
          console.error("Registration failed", response);
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          const validationErrors = error.response.data.errors;
          const errorMessage = validationErrors.map((error) => error.msg).join(", ");
          setErrors({ api: errorMessage });
        } else if (error.response && error.response.data && error.response.data.statusCode === 409) {
          setErrors({ api: "Email already exists, please use a different email address" });
        } else if (error.response && error.response.data && error.response.data.message) {
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
              <b>Sign up</b>
              <br />
              <p style={{ fontSize: 14, lineHeight: "1.7", color: "#666666", margin: 0, fontFamily: "Poppins-Regular" }}>
                Daftarkan akun anda gratis!
              </p>
            </span>

            <div className="wrap-input100 validate-input">
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
            </div>

            {formik.errors.api && (
              <div style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
                {formik.errors.api}
              </div>
            )}

            <div className="flex-sb-m w-full p-t-3 p-b-32">
              <div className="contact100-form-checkbox">
                <input className="input-checkbox100" id="ckb1" type="checkbox" name="terms" />
                <label className="label-checkbox100" htmlFor="ckb1">
                  Anda menyetujui syarat dan kebijakan privasi kami
                </label>
              </div>
            </div>

            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn" disabled={formik.isSubmitting}>
                Sign Up
              </button>
            </div>

            <div className="text-center p-t-46 p-b-20">
              <span className="txt2">
                Sudah mempunyai akun? <a href="/login"><b style={{ color: "#309434" }}>Login</b></a>
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

export default Register;
