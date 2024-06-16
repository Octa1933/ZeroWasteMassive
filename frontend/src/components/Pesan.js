import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useStore from "../store/useStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Pesan() {
  const user =
    useStore((state) => state.user) ??
    JSON.parse(localStorage.getItem("user")) ??
    "";
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: {
      fullName: user.name || "",
      email: user.email || "",
      telephone: "",
      address: "",
    },
    step2: {
      selectedService: "",
    },
    step3: {
      subscription: "",
    },
    step4: {
      paymentMethod: "",
    },
    step5: {
      cardNumber: "",
      validThru: "",
      cvv: "",
      nameOnCard: "",
      billingAddress: "",
    },
  });

  useEffect(() => {
    console.log(user.id);
  }, [formData]);

  const validationSchemaStep1 = Yup.object().shape({
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email wajib diisi"),
    telephone: Yup.string().required("Nomor telepon wajib diisi"),
    address: Yup.string().required("Alamat wajib diisi"),
  });

  const formikStep1 = useFormik({
    initialValues: {
      fullName: formData.step1.fullName,
      email: formData.step1.email,
      telephone: formData.step1.telephone,
      address: formData.step1.address,
    },
    validationSchema: validationSchemaStep1,
  });

  const validationSchemaStep5 = Yup.object().shape({
    cardNumber: Yup.string().required("Nomor kartu diperlukan"),
    validThru: Yup.string().required("Tanggal kedaluwarsa diperlukan"),
    cvv: Yup.string().required("CVV diperlukan"),
    nameOnCard: Yup.string().required("Nama pada kartu diperlukan"),
    billingAddress: Yup.string().required("Alamat penagihan diperlukan"),
  });

  const formikStep5 = useFormik({
    initialValues: {
      cardNumber: formData.step5.cardNumber,
      validThru: formData.step5.validThru,
      cvv: formData.step5.cvv,
      nameOnCard: formData.step5.nameOnCard,
      billingAddress: formData.step5.billingAddress,
    },
    validationSchema: validationSchemaStep5,
  });

  // Step 2 validation schema
  const step2Schema = Yup.object().shape({
    selectedService: Yup.string().required("Selected Service is required"),
  });

  // Step 3 validation schema
  const step3Schema = Yup.object().shape({
    subscription: Yup.string().required("Subscription is required"),
  });

  // Step 4 validation schema
  const step4Schema = Yup.object().shape({
    paymentMethod: Yup.string().required("Payment Method is required"),
  });

  // Step 2 Formik form
  const formikStep2 = useFormik({
    initialValues: {
      selectedService: "",
    },
    validationSchema: step2Schema,
    onSubmit: (values) => {
      // Handle form submission for step 2 if needed
    },
  });

  // Step 3 Formik form
  const formikStep3 = useFormik({
    initialValues: {
      subscription: "",
    },
    validationSchema: step3Schema,
    onSubmit: (values) => {
      // Handle form submission for step 3 if needed
    },
  });

  // Step 4 Formik form
  const formikStep4 = useFormik({
    initialValues: {
      paymentMethod: "",
    },
    validationSchema: step4Schema,
    onSubmit: (values) => {
      // Handle form submission for step 4 if needed
    },
  });

  const handleNextStep = () => {
    switch (currentStep) {
      case 1:
        formikStep1.validateForm().then((errors) => {
          if (Object.keys(errors).length === 0) {
            setFormData({
              ...formData,
              step1: {
                fullName: formikStep1.values.fullName,
                email: formikStep1.values.email,
                telephone: formikStep1.values.telephone,
                address: formikStep1.values.address,
              },
            });
            setCurrentStep((prevStep) => prevStep + 1);
          } else {
            alert("Harap isi semua bidang sebelum melanjutkan.");
          }
        });
        break;
      case 2:
        formikStep2.validateForm().then((errors) => {
          if (Object.keys(errors).length === 0) {
            setFormData({
              ...formData,
              step2: {
                selectedService: formikStep2.values.selectedService,
              },
            });
            setCurrentStep((prevStep) => prevStep + 1);
          } else {
            alert("Harap isi semua bidang sebelum melanjutkan.");
          }
        });
        break;
      case 3:
        formikStep3.validateForm().then((errors) => {
          if (Object.keys(errors).length === 0) {
            setFormData({
              ...formData,
              step3: {
                subscription: formikStep3.values.subscription,
              },
            });
            setCurrentStep((prevStep) => prevStep + 1);
          } else {
            alert("Harap isi semua bidang sebelum melanjutkan.");
          }
        });
        break;
      case 4:
        formikStep4.validateForm().then((errors) => {
          if (Object.keys(errors).length === 0) {
            setFormData({
              ...formData,
              step4: {
                paymentMethod: formikStep4.values.paymentMethod,
              },
            });
            setCurrentStep((prevStep) => prevStep + 1);
          } else {
            alert("Harap isi semua bidang sebelum melanjutkan.");
          }
        });
        break;
      case 5:
        formikStep5.validateForm().then((errors) => {
          if (Object.keys(errors).length === 0) {
            setFormData({
              ...formData,
              step5: {
                cardNumber: formikStep5.values.cardNumber,
                validThru: formikStep5.values.validThru,
                cvv: formikStep5.values.cvv,
                nameOnCard: formikStep5.values.nameOnCard,
                billingAddress: formikStep5.values.billingAddress,
              },
            });
            setCurrentStep((prevStep) => prevStep + 1);
          } else {
            alert("Harap isi semua bidang sebelum melanjutkan.");
          }
        });
        break;
      default:
        setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  // const handleNextStep = () => {
  //   if (currentStep === 1) {
  //     if (formikStep1.isValid) {
  //       setFormData({
  //         ...formData,
  //         step1: {
  //           fullName: formikStep1.values.fullName,
  //           email: formikStep1.values.email,
  //           telephone: formikStep1.values.telephone,
  //           address: formikStep1.values.address,
  //         },
  //       });
  //       setCurrentStep((prevStep) => prevStep + 1);
  //     } else {
  //       alert("Harap isi semua bidang sebelum melanjutkan.");
  //     }
  //   } else if (currentStep === 5) {
  //     if (formikStep5.isValid) {
  //       setFormData({
  //         ...formData,
  //         step5: {
  //           cardNumber: formikStep5.values.cardNumber,
  //           validThru: formikStep5.values.validThru,
  //           cvv: formikStep5.values.cvv,
  //           nameOnCard: formikStep5.values.nameOnCard,
  //           billingAddress: formikStep5.values.billingAddress,
  //         },
  //       });
  //       setCurrentStep((prevStep) => prevStep + 1);
  //     } else {
  //       alert("Harap isi semua bidang sebelum melanjutkan.");
  //     }
  //   } else {
  //     setCurrentStep((prevStep) => prevStep + 1);
  //   }
  // };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Handle service selection
  const handleServiceSelect = (service) => {
    setFormData({
      ...formData,
      step2: {
        selectedService: service,
      },
    });

    formikStep2.setValues({
      ...formikStep2.values,
      selectedService: service,
    });
  };

  // Handle subscription selection
  const handleSubscriptionSelect = (subscription) => {
    setFormData({
      ...formData,
      step3: {
        subscription: subscription,
      },
    });

    formikStep3.setValues({
      ...formikStep3.values,
      subscription: subscription,
    });
  };

  // Handle payment method selection
  const handlePaymentMethodSelect = (method) => {
    setFormData((prevData) => ({
      ...prevData,
      step4: {
        ...prevData.step4,
        paymentMethod: method,
      },
    }));

    formikStep4.setValues({
      ...formikStep4.values,
      paymentMethod: method,
    });
  };

  // const handleServiceSelect = (service) => {
  //   setFormData({
  //     ...formData,
  //     step2: {
  //       selectedService: service,
  //     },
  //   });
  // };

  // const handleSubscriptionSelect = (subscription) => {
  //   setFormData({
  //     ...formData,
  //     step3: {
  //       subscription: subscription,
  //     },
  //   });
  // };

  // const handlePaymentMethodSelect = (method) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     step4: {
  //       ...prevData.step4,
  //       paymentMethod: method,
  //     },
  //   }));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formikStep1.isValid || !formikStep5.isValid) {
      alert("Harap isi semua bidang dengan benar.");
      return;
    }

    try {
      const pickupResponse = await axios.post(
        "http://localhost:3000/api/pickup/createPickup",
        {
          user_id: user.id,
          fullName: formData.step1.fullName,
          email: formData.step1.email,
          residence_type: formData.step2.selectedService,
          phone_number: formData.step1.telephone,
          address: formData.step1.address,
        }
      );

      if (pickupResponse.status === 201) {
        console.log("Pickup created successfully:", pickupResponse.data);

        const paymentObject = {
          user_id: user.id,
          subscription_type: formData.step3.subscription,
          payment_method: formData.step4.paymentMethod,
          card_details: {
            card_number: formData.step5.cardNumber,
            valid_thru: formData.step5.validThru,
            cvv: formData.step5.cvv,
            name_on_card: formData.step5.nameOnCard,
          },
        };

        // Menggunakan variabel cardDetails untuk mengirim data ke server
        const paymentResponse = await axios.post(
          "http://localhost:3000/api/payment/makePayment",
          paymentObject
        );

        if (paymentResponse.status === 201) {
          navigate("/riwayat");
        } else {
          alert("Pembayaran gagal. Silakan coba lagi.");
        }
      } else {
        alert("Gagal membuat pickup. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Gagal memproses permintaan. Silakan coba lagi.");
    }
  };

  console.log(formData);

  return (
    <>
      <div>
        <div className="formbold-main-wrapper">
          <div className="">
            {/* <div className="formbold-steps">
              <ul>
                {[1, 2, 3, 4, 5, 6].map((step) => (
                  <li key={step} 
                      className={`formbold-step-menu${step} ${currentStep === step ? 'active' : ''}`}
                      onClick={() => setCurrentStep(step)}>
                    <span>{step}</span>
                    {step === 1 && "Isi Data Diri"}
                    {step === 2 && "Pilih Layanan"}
                    {step === 3 && "Pilih Langganan"}
                    {step === 4 && "Metode Pembayaran"}
                    {step === 5 && "Input Pembayaran"}
                    {step === 6 && "Validasi"}
                  </li>
                ))}
              </ul>
            </div> */}
            <h1 className="text-center fw-bold my-4">Mulai Langganan</h1>

            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div
                key={step}
                className={`formbold-form-step-${step} ${
                  currentStep === step ? "active" : ""
                }`}
              >
                {step === 1 && (
                  <>
                    <div className="d-flex justify-content-center py-4">
                      <img src="assets/img/progress1.png" alt="" />
                    </div>
                    <div className="formbold-input-flex">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="formbold-form-label"
                        >
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Nama Lengkap"
                          id="fullName"
                          className="formbold-form-input"
                          onChange={formikStep1.handleChange}
                          onBlur={formikStep1.handleBlur}
                          value={formikStep1.values.fullName}
                        />
                        {formikStep1.touched.fullName &&
                          formikStep1.errors.fullName && (
                            <div className="text-danger mt-2">
                              {formikStep1.errors.fullName}
                            </div>
                          )}
                      </div>
                      <div>
                        <label htmlFor="email" className="formbold-form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          placeholder="Alamat Email"
                          id="email"
                          className="formbold-form-input"
                          onChange={formikStep1.handleChange}
                          onBlur={formikStep1.handleBlur}
                          value={formikStep1.values.email}
                        />
                        {formikStep1.touched.email &&
                          formikStep1.errors.email && (
                            <div className="text-danger mt-2">
                              {formikStep1.errors.email}
                            </div>
                          )}
                      </div>
                    </div>
                  </>
                )}
                {step === 1 && (
                  <div>
                    <div>
                      <label
                        htmlFor="telephone"
                        className="formbold-form-label"
                      >
                        No Telepon
                      </label>
                      <input
                        type="text"
                        name="telephone"
                        id="telephone"
                        placeholder="+62"
                        className="formbold-form-input"
                        onChange={formikStep1.handleChange}
                        onBlur={formikStep1.handleBlur}
                        value={formikStep1.values.telephone}
                      />
                      {formikStep1.touched.telephone &&
                        formikStep1.errors.telephone && (
                          <div className="text-danger mt-2">
                            {formikStep1.errors.telephone}
                          </div>
                        )}
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="formbold-form-label mt-3"
                      >
                        Alamat
                      </label>
                      <textarea
                        name="address"
                        id="address"
                        placeholder="Masukkan alamat lengkap Anda"
                        className="form-control"
                        onChange={formikStep1.handleChange}
                        onBlur={formikStep1.handleBlur}
                        value={formikStep1.values.address}
                      />
                      {formikStep1.touched.address &&
                        formikStep1.errors.address && (
                          <div className="text-danger mt-2">
                            {formikStep1.errors.address}
                          </div>
                        )}
                    </div>
                    <img
                      src="assets/img/mapp.png"
                      className="img-fluid rounded-4 mt-4"
                      alt=""
                    />

                    <div className="d-flex gap-2 mt-3">
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
                )}

                {step === 2 && (
                  <>
                    <div className="d-flex justify-content-center py-4">
                      <img src="assets/img/progress2.png" alt="" />
                    </div>
                    <center>
                      <a
                        href="#"
                        style={{
                          backgroundColor:
                            formData.step2.selectedService === "Rumah"
                              ? "#00837433"
                              : "transparent",
                        }}
                        className="buttonpilihlayanan"
                        onClick={() => handleServiceSelect("Rumah")}
                      >
                        <div className="d-flex align-items-center gap-4">
                          <div className="icon-wrapper">
                            <div className="icon-wrapper">
                              <img src="/assets/img/home.svg" alt="" />
                            </div>
                          </div>
                          <span> Ambil Sampah Rumah</span>
                        </div>
                      </a>
                      <br />
                      <a
                        href="#"
                        style={{
                          backgroundColor:
                            formData.step2.selectedService === "Apartemen"
                              ? "#00837433"
                              : "transparent",
                        }}
                        className="buttonpilihlayanan"
                        onClick={() => handleServiceSelect("Apartemen")}
                      >
                        <div className="d-flex align-items-center gap-4">
                          <div className="icon-wrapper">
                            <img src="/assets/img/furniture.svg" alt="" />
                          </div>
                          <span> Sampah Furniture</span>
                        </div>
                      </a>
                      <br />
                      <a
                        href="#"
                        style={{
                          backgroundColor:
                            formData.step2.selectedService === "Kantor"
                              ? "#00837433"
                              : "transparent",
                        }}
                        className="buttonpilihlayanan"
                        onClick={() => handleServiceSelect("Kantor")}
                      >
                        <div className="d-flex align-items-center gap-4">
                          <div className="icon-wrapper">
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
                                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                              />
                            </svg>
                          </div>
                          <span> Sampah Perkantoran</span>
                        </div>
                      </a>
                      <br />
                      <a
                        href="#"
                        style={{
                          backgroundColor:
                            formData.step2.selectedService === "Kos"
                              ? "#00837433"
                              : "transparent",
                        }}
                        className="buttonpilihlayanan"
                        onClick={() => handleServiceSelect("Kos")}
                      >
                        <div className="d-flex align-items-center gap-4">
                          <div className="icon-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-1"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                              />
                            </svg>
                          </div>
                          <span>Kos</span>
                        </div>
                      </a>
                    </center>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="d-flex justify-content-center py-4">
                      <img src="assets/img/progress3.png" alt="" />
                    </div>
                    <section id="layanan" className="layanan">
                      <div className="">
                        <div className="d-flex gap-4">
                          <div className="w-1-3">
                            <div
                              className={`pricing-item ${
                                formData.step3.subscription === "standard"
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() =>
                                handleSubscriptionSelect("standard")
                              }
                              style={
                                formData.step3.subscription === "standard"
                                  ? { backgroundColor: "#00837433" }
                                  : {}
                              }
                            >
                              <h3 className="primary">Standard</h3>
                              <div className="d-flex flex-column justify-content-center align-items-center my-4">
                                <h4 className="black">Rp 25.000</h4>
                                <div className="text-gray">Tagihan</div>
                                <div className="text-gray">Perbulan</div>
                              </div>
                              <div className="text-center">
                                <a href="#" className="buy-btn">
                                  Pesan
                                </a>
                              </div>
                              <ul>
                                <li>
                                  <i className="bi bi-check"></i> Pengambilan
                                  setiap hari rabu
                                </li>
                                <li>
                                  <i className="bi bi-check"></i> Jarak maksimal
                                  10 KM
                                </li>
                                <li>
                                  <i className="bi bi-check"></i> Maksimal berat
                                  sampah 15 KG
                                </li>
                                <li className="na">
                                  <i className="bi bi-x"></i>{" "}
                                  <span>
                                    Wadah sampah organik anorganik dari
                                    ZeroWaste
                                  </span>
                                </li>
                                <li className="na">
                                  <i className="bi bi-x"></i>{" "}
                                  <span>Prioritas customer service</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="w-1-3">
                            <div
                              className={`pricing-item ${
                                formData.step3.subscription === "pro"
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() => handleSubscriptionSelect("pro")}
                              style={
                                formData.step3.subscription === "pro"
                                  ? { backgroundColor: "#00837433" }
                                  : {}
                              }
                            >
                              <h3 className="primary">Pro</h3>
                              <div className="d-flex flex-column justify-content-center align-items-center my-4 position-relative">
                                <div className="card-discount">Rp 75.000</div>
                                <h4 className="black">Rp 50.000</h4>
                                <div className="text-gray">Tagihan</div>
                                <div className="text-gray">Perbulan</div>
                              </div>

                              <div className="text-center">
                                <a href="#" className="buy-btn">
                                  Pesan sekarang!
                                </a>
                              </div>
                              <ul>
                                <li>
                                  <i className="bi bi-check"></i> Pengambilan
                                  setiap hari rabu dan sabtu
                                </li>
                                <li>
                                  <i className="bi bi-check"></i> Jarak maksimal
                                  15 KM
                                </li>
                                <li>
                                  <i className="bi bi-check"></i> Maksimal berat
                                  sampah 30 KG
                                </li>
                                <li>
                                  <i className="bi bi-check"></i> Wadah sampah
                                  organik dari ZeroWaste
                                </li>
                                <li>
                                  <i className="bi bi-check"></i> Prioritas
                                  customer service
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="w-1-3">
                            <div
                              className={`pricing-item ${
                                formData.step3.subscription === "exclusive"
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() =>
                                handleSubscriptionSelect("exclusive")
                              }
                              style={
                                formData.step3.subscription === "exclusive"
                                  ? { backgroundColor: "#00837433" }
                                  : {}
                              }
                            >
                              {/* <h3>Exclusive</h3>
                              <div className="icon">
                                <i className="bi bi-send"></i>
                              </div>
                              <h4>
                                <sup>Rp</sup>100.000<span> /Perbulan</span>
                              </h4> */}

                              <h3 className="primary">Exclusive</h3>
                              <div className="d-flex flex-column justify-content-center align-items-center my-4">
                                <h4 className="black">Rp 100.000</h4>
                                <div className="text-gray">Tagihan</div>
                                <div className="text-gray">Perbulan</div>
                              </div>

                              <div className="text-center">
                                <a href="#" className="buy-btn">
                                  Pesan
                                </a>
                              </div>
                              <ul>
                                <li>
                                  <i className="bi bi-check"></i> Pengambilan 3
                                  kali dan waktu ditentukan oleh anda!
                                </li>
                                <li>
                                  <i className="bi bi-check"></i> Jarak maksimal
                                  20 KM
                                </li>
                                <li>
                                  <i className="bi bi-check"></i> Maksimal berat
                                  sampah 50 KG
                                </li>
                                <li>
                                  <i className="bi bi-check"></i> Wadah sampah
                                  organik anorganik dari ZeroWaste
                                </li>
                                <li>
                                  <i className="bi bi-check"></i> Prioritas
                                  customer service
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </>
                )}

                {step === 4 && (
                  <>
                    <div className="d-flex justify-content-center py-4">
                      <img src="assets/img/progress4.png" alt="" />
                    </div>
                    <div>
                      <center>
                        <a
                          href="#"
                          style={{
                            backgroundColor:
                              formData.step4.paymentMethod === "creditDebitCard"
                                ? "#00837433"
                                : "#fff",
                          }}
                          className="buttonpilihlayanan"
                          onClick={() =>
                            handlePaymentMethodSelect("creditDebitCard")
                          }
                        >
                          <div className="d-flex align-items-center justify-content-between w-full">
                            <span className="fs-6">Credit atau Debit Card</span>
                            <div className="d-flex align-items-center gap-2">
                              <img
                                src="/assets/img/payment/mandiri.png"
                                alt=""
                              />
                              <img src="/assets/img/payment/bca.png" alt="" />
                              <img src="/assets/img/payment/visa.png" alt="" />
                              <img
                                src="/assets/img/payment/mastercard.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </a>
                        <br />
                        <a
                          href="#"
                          style={{
                            backgroundColor:
                              formData.step4.paymentMethod === "digitalWallet"
                                ? "#00837433"
                                : "#fff",
                          }}
                          className="buttonpilihlayanan"
                          onClick={() =>
                            handlePaymentMethodSelect("digitalWallet")
                          }
                        >
                          <div className="d-flex align-items-center justify-content-between w-full">
                            <span className="fs-6">Digital Wallet</span>
                            <div className="d-flex align-items-center gap-2">
                              <img
                                src="/assets/img/payment/shopee.png"
                                alt=""
                              />
                              <img src="/assets/img/payment/ovo.png" alt="" />
                              <img src="/assets/img/payment/gopay.png" alt="" />
                              <img src="/assets/img/payment/dana.png" alt="" />
                            </div>
                          </div>
                        </a>
                        <br />
                        <a
                          href="#"
                          style={{
                            backgroundColor:
                              formData.step4.paymentMethod === "geraiRetail"
                                ? "#00837433"
                                : "#fff",
                          }}
                          className="buttonpilihlayanan"
                          onClick={() =>
                            handlePaymentMethodSelect("geraiRetail")
                          }
                        >
                          <div className="d-flex align-items-center justify-content-between w-full">
                            <span className="fs-6">Gerai Retail</span>
                            <div className="d-flex align-items-center gap-2">
                              <img
                                src="/assets/img/payment/lawson.png"
                                alt=""
                              />
                              <img
                                src="/assets/img/payment/indomaret.png"
                                alt=""
                              />
                              <img
                                src="/assets/img/payment/circlek.png"
                                alt=""
                              />
                              <img
                                src="/assets/img/payment/alfamart.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </a>
                        <br />
                        <a
                          href="#"
                          style={{
                            backgroundColor:
                              formData.step4.paymentMethod === "financing"
                                ? "#00837433"
                                : "#fff",
                          }}
                          className="buttonpilihlayanan"
                          onClick={() => handlePaymentMethodSelect("financing")}
                        >
                          <div className="d-flex align-items-center justify-content-between w-full">
                            <span className="fs-6">Financing</span>
                            <div className="d-flex align-items-center gap-2">
                              <img
                                src="/assets/img/payment/bcafinance.png"
                                alt=""
                              />
                              <img
                                src="/assets/img/payment/gopaylater.png"
                                alt=""
                              />
                              <img
                                src="/assets/img/payment/akulaku.png"
                                alt=""
                              />
                              <img
                                src="/assets/img/payment/kredivo.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </a>
                      </center>
                    </div>
                  </>
                )}

                {step === 5 && (
                  <>
                    <div className="d-flex justify-content-center py-4">
                      <img src="assets/img/progress4.png" alt="" />
                    </div>
                    <div>
                      <div>
                        <label
                          htmlFor="cardNumber"
                          className="formbold-form-label"
                        >
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          id="cardNumber"
                          placeholder="4000 0000 0000 1001"
                          className="formbold-form-input"
                          onChange={formikStep5.handleChange}
                          onBlur={formikStep5.handleBlur}
                          value={formikStep5.values.cardNumber}
                        />
                      </div>

                      <div className="formbold-input-flex">
                        <div>
                          <label
                            htmlFor="validThru"
                            className="formbold-form-label mt-2"
                          >
                            Valid Thru
                          </label>
                          <input
                            type="text"
                            name="validThru"
                            placeholder="MM/YY"
                            id="validThru"
                            className="formbold-form-input"
                            onChange={formikStep5.handleChange}
                            onBlur={formikStep5.handleBlur}
                            value={formikStep5.values.validThru}
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="formbold-form-label">
                            CVV
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            placeholder="CVV"
                            id="cvv"
                            className="formbold-form-input"
                            onChange={formikStep5.handleChange}
                            onBlur={formikStep5.handleBlur}
                            value={formikStep5.values.cvv}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="nameOnCard"
                          className="formbold-form-label"
                        >
                          Name on Card
                        </label>
                        <input
                          type="text"
                          name="nameOnCard"
                          id="nameOnCard"
                          placeholder="Enter Card Name"
                          className="formbold-form-input"
                          onChange={formikStep5.handleChange}
                          onBlur={formikStep5.handleBlur}
                          value={formikStep5.values.nameOnCard}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="billingAddress"
                          className="formbold-form-label mt-4"
                        >
                          Billing Address
                        </label>
                        <input
                          type="text"
                          name="billingAddress"
                          id="billingAddress"
                          placeholder="Enter Billing Address"
                          className="formbold-form-input"
                          onChange={formikStep5.handleChange}
                          onBlur={formikStep5.handleBlur}
                          value={formikStep5.values.billingAddress}
                        />
                      </div>

                      <div>
                        <br />
                        <input
                          type="text"
                          placeholder={`IDR ${
                            formData.step3.subscription === "standard"
                              ? "25.000"
                              : formData.step3.subscription === "pro"
                              ? "75.000"
                              : formData.step3.subscription === "exclusive"
                              ? "100.000"
                              : "0"
                          }/Bulan`}
                          className="formbold-form-input"
                          disabled
                        />
                      </div>
                    </div>
                  </>
                )}

                {step === 6 && (
                  <>
                    <div className="d-flex justify-content-center py-4">
                      <img src="assets/img/progress4.png" alt="" />
                    </div>
                    <div>
                      <h1>Detail Pembayaran</h1>

                      <div>
                        <label
                          htmlFor="cardNumber"
                          className="formbold-form-label"
                        >
                          Nomor Kartu
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          id="cardNumber"
                          value={formData.step5.cardNumber}
                          className="formbold-form-input"
                          readOnly
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="validThru"
                          className="formbold-form-label mt-2"
                        >
                          Berlaku Sampai
                        </label>
                        <input
                          type="text"
                          name="validThru"
                          id="validThru"
                          value={formData.step5.validThru}
                          className="formbold-form-input"
                          readOnly
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="cvv"
                          className="formbold-form-label mt-2"
                        >
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          id="cvv"
                          value={formData.step5.cvv}
                          className="formbold-form-input"
                          readOnly
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="nameOnCard"
                          className="formbold-form-label mt-2"
                        >
                          Nama di Kartu
                        </label>
                        <input
                          type="text"
                          name="nameOnCard"
                          id="nameOnCard"
                          value={formData.step5.nameOnCard}
                          className="formbold-form-input"
                          readOnly
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}

            <div className="mt-4">
              {currentStep !== 6 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  {currentStep > 1 && (
                    <button
                      className="btn-ghost-sm w-full d-flex gap-4 justify-content-center align-items-center"
                      onClick={handlePrevStep}
                    >
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.79289 1.29289C9.57322 1.11237 9.26256 1 8.93934 1C8.61612 1 8.30546 1.11237 8.08579 1.29289L0.292893 9.08579C0.105356 9.27332 0 9.55093 0 9.84829C0 10.1457 0.105356 10.4233 0.292893 10.6108L8.08579 18.4037C8.27332 18.5912 8.55093 18.6966 8.84829 18.6966C9.1457 18.6966 9.42331 18.5912 9.61084 18.4037C9.79932 18.2162 9.90469 17.9386 9.90469 17.6412C9.90469 17.3438 9.79932 17.0662 9.61084 16.8787L3.73223 11H16C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9H3.73223L9.61084 3.12132C9.79932 2.93379 9.90469 2.65617 9.90469 2.3588C9.90469 2.06143 9.79932 1.78382 9.79289 1.78448L9.79289 1.29289Z"
                          fill="white"
                        />
                      </svg>
                      <div>Back</div>
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn-primary-sm w-full"
                    onClick={handleNextStep}
                  >
                    Lanjut
                  </button>
                </div>
              )}
              {/* Tombol submit terlihat saat di step 6 */}
              {currentStep === 6 && (
                <button
                  type="submit"
                  className="btn-primary-sm w-full"
                  onClick={handleSubmit}
                >
                  Mulai Berlangganan
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pesan;
