import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useStore from "../store/useStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Pesan() {
  const user = useStore((state) => state.user) ?? JSON.parse(localStorage.getItem("user")) ?? "";
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: {
      fullName: user.name || "",
      email: user.email || "",
      telephone: "",
      address: ""
    },
    step2: {
      selectedService: ""
    },
    step3: {
      subscription: ""
    },
    step4: {
      paymentMethod: ""
    },
    step5: {
      cardNumber: "",
      validThru: "",
      cvv: "",
      nameOnCard: "",
      billingAddress: "",
    }
  });

  useEffect(() => {
    console.log(user.id)
  }, [formData]);

  const validationSchemaStep1 = Yup.object().shape({
    email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
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
    cardNumber: Yup.string().required('Nomor kartu diperlukan'),
    validThru: Yup.string().required('Tanggal kedaluwarsa diperlukan'),
    cvv: Yup.string().required('CVV diperlukan'),
    nameOnCard: Yup.string().required('Nama pada kartu diperlukan'),
    billingAddress: Yup.string().required('Alamat penagihan diperlukan'),
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


  const handleNextStep = () => {
    if (currentStep === 1) {
      if (formikStep1.isValid) {
        setFormData({
          ...formData,
          step1: {
            fullName: formikStep1.values.fullName,
            email: formikStep1.values.email,
            telephone: formikStep1.values.telephone,
            address: formikStep1.values.address
          }
        });
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        alert("Harap isi semua bidang sebelum melanjutkan.");
      }
    } else if (currentStep === 5) {
      if (formikStep5.isValid) {
        setFormData({
          ...formData,
          step5: {
            cardNumber: formikStep5.values.cardNumber,
            validThru: formikStep5.values.validThru,
            cvv: formikStep5.values.cvv,
            nameOnCard: formikStep5.values.nameOnCard,
            billingAddress: formikStep5.values.billingAddress,
          }
        });
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        alert("Harap isi semua bidang sebelum melanjutkan.");
      }
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
    


  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleServiceSelect = (service) => {
    setFormData({
      ...formData,
      step2: {
        selectedService: service
      }
    });
  };

  const handleSubscriptionSelect = (subscription) => {
    setFormData({
      ...formData,
      step3: {
        subscription: subscription
      }
    });
  };

  const handlePaymentMethodSelect = (method) => {
    setFormData((prevData) => ({
      ...prevData,
      step4: {
        ...prevData.step4,
        paymentMethod: method,
      },
    }));
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formikStep1.isValid || !formikStep5.isValid) {
      alert("Harap isi semua bidang dengan benar.");
      return;
    }

    try {
      const pickupResponse = await axios.post('http://localhost:3000/api/pickup/createPickup', {
        user_id : user.id,
        fullName: formData.step1.fullName,
        email: formData.step1.email,
        residence_type : formData.step2.selectedService,
        phone_number: formData.step1.telephone,
        address: formData.step1.address
      });

      if (pickupResponse.status === 201) {
        console.log('Pickup created successfully:', pickupResponse.data);

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
      const paymentResponse = await axios.post('http://localhost:3000/api/payment/makePayment', paymentObject);


        if (paymentResponse.status === 201) {
          navigate("/riwayat")
        } else {
          alert("Pembayaran gagal. Silakan coba lagi.");
        }
      } else {
        alert("Gagal membuat pickup. Silakan coba lagi.");
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert("Gagal memproses permintaan. Silakan coba lagi.");
    }
  };

  return (
    <>
      <div>
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
              <div className="formbold-steps">
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
              </div>

              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div key={step} className={`formbold-form-step-${step} ${currentStep === step ? 'active' : ''}`}>
                  {step === 1 && (
                    <div className="formbold-input-flex">
                      <div>
                        <label htmlFor="fullName" className="formbold-form-label">
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
                        {formikStep1.touched.fullName && formikStep1.errors.fullName && (
                          <div className="error">{formikStep1.errors.fullName}</div>
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
                        {formikStep1.touched.email && formikStep1.errors.email && (
                          <div className="error">{formikStep1.errors.email}</div>
                        )}
                      </div>
                    </div>
                  )}
                  {step === 1 && (
                    <div>
                      <div>
                        <label htmlFor="telephone" className="formbold-form-label">
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
                        {formikStep1.touched.telephone && formikStep1.errors.telephone && (
                          <div className="error">{formikStep1.errors.telephone}</div>
                        )}
                      </div>
                      <div>
                        <label htmlFor="address" className="formbold-form-label">
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
                        {formikStep1.touched.address && formikStep1.errors.address && (
                          <div className="error">{formikStep1.errors.address}</div>
                        )}
                      </div>
                      <img src="assets/img/mapp.png" className="img-fluid rounded-4" alt="" />
                    </div>
                  )}
                  {step === 2 && (
                    <center>
                    <a href="#" style={{ backgroundColor: formData.step2.selectedService === "Rumah" ? '#309434' : 'transparent', color: formData.step2.selectedService === "Rumah" ? '#FFFF00' : '#000' }} className="buttonpilihlayanan" onClick={() => handleServiceSelect("Rumah")}>
                      <span>Ambil Sampah Rumah</span>
                    </a><br />
                    <a href="#" style={{ backgroundColor: formData.step2.selectedService === "Apartemen" ? '#309434' : 'transparent', color: formData.step2.selectedService === "Apartemen" ? '#FFFF00' : '#000' }} className="buttonpilihlayanan" onClick={() => handleServiceSelect("Apartemen")}>
                      <span>Sampah Furniture</span>
                    </a><br />
                    <a href="#" style={{ backgroundColor: formData.step2.selectedService === "Kantor" ? '#309434' : 'transparent', color: formData.step2.selectedService === "Kantor" ? '#FFFF00' : '#000' }} className="buttonpilihlayanan" onClick={() => handleServiceSelect("Kantor")}>
                      <span>Sampah Perkantoran</span>
                    </a><br />
                    <a href="#" style={{ backgroundColor: formData.step2.selectedService === "Kos" ? '#309434' : 'transparent', color: formData.step2.selectedService === "Kos" ? '#FFFF00' : '#000' }} className="buttonpilihlayanan" onClick={() => handleServiceSelect("Kos")}>
                      <span>Kos</span>
                    </a>
                  </center>
                  
                  
                  )}

                  {step === 3 && (
                    <section id="layanan" className="layanan sections-bg">
                      <div className="container" data-aos="fade-up">
                        <div className="row g-4 py-lg-5" data-aos="zoom-out" data-aos-delay="100">
                          <div className="col-lg-4">
                            <div className={`pricing-item ${formData.step3.subscription === "standard" ? 'selected' : ''}`} onClick={() => handleSubscriptionSelect("standard")} style={formData.step3.subscription === "standard" ? { backgroundColor: "yellow" } : {}}>
                              <h3>Standard</h3>
                              <div className="icon">
                                <i className="bi bi-box"></i>
                              </div>
                              <h4><sup>Rp</sup>25.000<span> /Perbulan</span></h4>
                              <ul>
                                <li><i className="bi bi-check"></i> Pengambilan setiap hari rabu</li>
                                <li><i className="bi bi-check"></i> Jarak maksimal 10 KM</li>
                                <li><i className="bi bi-check"></i> Maksimal berat sampah 15 KG</li>
                                <li className="na"><i className="bi bi-x"></i> <span>Wadah sampah organik anorganik dari ZeroWaste</span></li>
                                <li className="na"><i className="bi bi-x"></i> <span>Prioritas customer service</span></li>
                              </ul>
                              <div className="text-center"><a href="#" className="buy-btn">Pesan</a></div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className={`pricing-item featured ${formData.step3.subscription === "pro" ? 'selected' : ''}`} onClick={() => handleSubscriptionSelect("pro")} style={formData.step3.subscription === "pro" ? { backgroundColor: "yellow" } : {}}>
                              <h3>Pro</h3>
                              <div className="icon">
                                <i className="bi bi-airplane"></i>
                              </div>
                              <h6 style={{ textDecoration: "line-through" }}><sup>Rp</sup>75.000<span> /Perbulan</span></h6>
                              <h4><sup>Rp</sup>50.000<span> /Perbulan</span></h4>
                              <ul>
                                <li><i className="bi bi-check"></i> Pengambilan setiap hari rabu dan sabtu</li>
                                <li><i className="bi bi-check"></i> Jarak maksimal 15 KM</li>
                                <li><i className="bi bi-check"></i> Maksimal berat sampah 30 KG</li>
                                <li><i className="bi bi-check"></i> Wadah sampah organik dari ZeroWaste</li>
                                <li><i className="bi bi-check"></i> Prioritas customer service</li>
                              </ul>
                              <div className="text-center"><a href="#" className="buy-btn">Pesan sekarang!</a></div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className={`pricing-item ${formData.step3.subscription === "exclusive" ? 'selected' : ''}`} onClick={() => handleSubscriptionSelect("exclusive")} style={formData.step3.subscription === "exclusive" ? { backgroundColor: "yellow" } : {}}>
                              <h3>Exclusive</h3>
                              <div className="icon">
                                <i className="bi bi-send"></i>
                              </div>
                              <h4><sup>Rp</sup>100.000<span> /Perbulan</span></h4>
                              <ul>
                                <li><i className="bi bi-check"></i> Pengambilan 3 kali dan waktu ditentukan oleh anda!</li>
                                <li><i className="bi bi-check"></i> Jarak maksimal 20 KM</li>
                                <li><i className="bi bi-check"></i> Maksimal berat sampah 50 KG</li>
                                <li><i className="bi bi-check"></i> Wadah sampah organik anorganik dari ZeroWaste</li>
                                <li><i className="bi bi-check"></i> Prioritas customer service</li>
                              </ul>
                              <div className="text-center"><a href="#" className="buy-btn">Pesan</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}

                {step === 4 && (
                  <div>
                    <center>
                      <a href="#" style={{ backgroundColor: formData.step4.paymentMethod === "creditDebitCard" ? 'green' : 'black' }} className="buttonpilihlayanan" onClick={() => handlePaymentMethodSelect("creditDebitCard")}><span>Credit atau Debit Card</span></a><br />
                      <a href="#" style={{ backgroundColor: formData.step4.paymentMethod === "digitalWallet" ? 'green' : 'black' }} className="buttonpilihlayanan" onClick={() => handlePaymentMethodSelect("digitalWallet")}><span>Digital Wallet</span></a><br />
                      <a href="#" style={{ backgroundColor: formData.step4.paymentMethod === "geraiRetail" ? 'green' : 'black' }} className="buttonpilihlayanan" onClick={() => handlePaymentMethodSelect("geraiRetail")}><span>Gerai Retail</span></a><br />
                      <a href="#" style={{ backgroundColor: formData.step4.paymentMethod === "financing" ? 'green' : 'black' }} className="buttonpilihlayanan" onClick={() => handlePaymentMethodSelect("financing")}><span>Financing</span></a>
                    </center>
                  </div>
                )}


             {step === 5 && (
              <div>
                <div>
                  <label htmlFor="cardNumber" className="formbold-form-label">Card Number</label>
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
                    <label htmlFor="validThru" className="formbold-form-label">Valid Thru</label>
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
                    <label htmlFor="cvv" className="formbold-form-label">CVV</label>
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
                  <label htmlFor="nameOnCard" className="formbold-form-label">Name on Card</label>
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
                  <label htmlFor="billingAddress" className="formbold-form-label">Billing Address</label>
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
            )}



                {step === 6 && (
                  <div>
                  <h1>Detail Pembayaran</h1>
                
                  <div>
                    <label htmlFor="cardNumber" className="formbold-form-label">Nomor Kartu</label>
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
                    <label htmlFor="validThru" className="formbold-form-label">Berlaku Sampai</label>
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
                    <label htmlFor="cvv" className="formbold-form-label">CVV</label>
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
                    <label htmlFor="nameOnCard" className="formbold-form-label">Nama di Kartu</label>
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
                
                )}

                </div>
              ))}

              <div className="formbold-form-btn-wrapper">
                {currentStep !== 6 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap:5 }}>
                    {currentStep > 1 && (
                      <button className="formbold-btn" onClick={handlePrevStep}>
                      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.79289 1.29289C9.57322 1.11237 9.26256 1 8.93934 1C8.61612 1 8.30546 1.11237 8.08579 1.29289L0.292893 9.08579C0.105356 9.27332 0 9.55093 0 9.84829C0 10.1457 0.105356 10.4233 0.292893 10.6108L8.08579 18.4037C8.27332 18.5912 8.55093 18.6966 8.84829 18.6966C9.1457 18.6966 9.42331 18.5912 9.61084 18.4037C9.79932 18.2162 9.90469 17.9386 9.90469 17.6412C9.90469 17.3438 9.79932 17.0662 9.61084 16.8787L3.73223 11H16C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9H3.73223L9.61084 3.12132C9.79932 2.93379 9.90469 2.65617 9.90469 2.3588C9.90469 2.06143 9.79932 1.78382 9.79289 1.78448L9.79289 1.29289Z" fill="white"/>
                      </svg>
                      Back
                    </button>
                    
                    )}
                    <button type="button" className="formbold-btn" onClick={handleNextStep}>
                      Next Step
                      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1675_1807)">
                          <path d="M10.7814 7.33312L7.20541 3.75712L8.14808 2.81445L13.3334 7.99979L8.14808 13.1851L7.20541 12.2425L10.7814 8.66645H2.66675V7.33312H10.7814Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1675_1807">
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                )}
                {/* Tombol submit terlihat saat di step 6 */}
                {currentStep === 6 && (
                  <button type="submit" className="formbold-btn" onClick={handleSubmit}>
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
