import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail_Pengambilan() {
  const { id } = useParams();
  const [pickupData, setPickupData] = useState(null);

  useEffect(() => {
    fetchPickupById(id);
  }, [id]);

  const fetchPickupById = async (pickupId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/pickup/getPickupById/${pickupId}`
      );
      setPickupData(response.data.data);
    } catch (error) {
      console.error("Error fetching pickup:", error);
    }
  };

  return (
    <>
      <div>
        <br />
        <div className="section-header">
          <h2>Detail Pengambilan</h2>
        </div>
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            {pickupData && (
              <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div className="formbold-form-step-1 active">
                  <div className="formbold-input-flex">
                    <div>
                      <label
                        htmlFor="firstname"
                        className="formbold-form-label"
                      >
                        Nama Penerima
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        value={pickupData[0].name}
                        id="firstname"
                        className="formbold-form-input"
                        disabled
                      />
                    </div>
                    <div>
                      <label htmlFor="lastname" className="formbold-form-label">
                        Nomor HP
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        value={pickupData[0].phone_number}
                        id="lastname"
                        className="formbold-form-input"
                        disabled
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastname" className="formbold-form-label">
                      Tipe
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="option1"
                      autoComplete="off"
                      disabled={
                        pickupData && pickupData[0].residence_type !== "Rumah"
                      }
                    />
                    <label
                      className="btn btn-secondary"
                      htmlFor="option1"
                      style={{ marginLeft: "6px" }}
                    >
                      Rumah
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="option2"
                      autoComplete="off"
                      disabled={
                        pickupData &&
                        pickupData[0].residence_type !== "Apartemen"
                      }
                    />
                    <label
                      className="btn btn-secondary"
                      htmlFor="option2"
                      style={{ marginLeft: "6px" }}
                    >
                      Apartemen
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="option3"
                      autoComplete="off"
                      disabled={
                        pickupData && pickupData[0].residence_type !== "Kantor"
                      }
                    />
                    <label
                      className="btn btn-secondary"
                      htmlFor="option3"
                      style={{ marginLeft: "6px" }}
                    >
                      Kantor
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="option4"
                      autoComplete="off"
                      disabled={
                        pickupData && pickupData[0].residence_type !== "Kos"
                      }
                    />
                    <label
                      className="btn btn-secondary"
                      htmlFor="option4"
                      style={{ marginLeft: "6px" }}
                    >
                      Kos
                    </label>
                  </div>

                  <br />
                  <div>
                    <label htmlFor="address" className="formbold-form-label">
                      Kota dan Kecamatan
                    </label>
                    <textarea
                      className="form-control"
                      value={pickupData[0].address}
                      id="floatingTextarea"
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="formbold-form-label">
                      Catatan dari petugas
                    </label>
                    <textarea
                      className="form-control"
                      placeholder=""
                      id="floatingTextarea"
                      disabled
                      defaultValue={pickupData[0].notes}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="formbold-form-label">
                      Bukti Foto Pengangkutan
                    </label>
                    {pickupData[0].proof_of_pickup ? (
                      <img
                        src={`http://localhost:3000/static/${pickupData[0].proof_of_pickup}`}
                        className="img-fluid rounded-4"
                        alt=""
                        style={{ width: "30%" }}
                      />
                    ) : (
                      <p>Tidak ada foto pengangkutan</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="pickupStatus"
                      className="formbold-form-label"
                    >
                      Status Pengambilan
                    </label>
                    <button
                      className={`btn btn-${
                        pickupData[0].pickup_status === "pending"
                          ? "warning"
                          : "success"
                      }`}
                      disabled
                    >
                      {pickupData[0].pickup_status}
                    </button>
                  </div>
                </div>
                <div></div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail_Pengambilan;
