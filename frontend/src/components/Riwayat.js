import React, { useState, useEffect } from "react";
import axios from "axios";
import useStore from "../store/useStore"; // Impor useStore dari Zustand
import { Link } from "react-router-dom";

function Riwayat() {
  const [riwayatData, setRiwayatData] = useState([]);
  const user = useStore((state) => state.user) ?? JSON.parse(localStorage.getItem("user")) ?? "";

  useEffect(() => {
    if (user.id) { // Pastikan ID pengguna tersedia sebelum melakukan permintaan
      fetchData(user.id);
    }
  }, []);

  const fetchData = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/pickup/getPickupByUserId/${userId}`);
      const formattedData = response.data.data.map(item => ({
        ...item,
        created_at: formatDate(item.created_at)
      }));
      setRiwayatData(formattedData);
    } catch (error) {
      console.error("Error fetching pickups:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', options);
  };

  return (
    <>
      <div>
        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Riwayat Langganan</h2>
            </div>
            <div className="row gy-4 posts-list">
              {riwayatData.map((item, index) => (
                <div key={index} className="col-xl-4 col-md-6">
                  <article>
                    <div className="post-img">
                    <img src={item.proof_of_pickup ? `http://localhost:3000/static/${item.proof_of_pickup}` : "assets/img/rumah.jpg"} alt="post" className="img-fluid" />
                    </div>
                    <h2 className="title">
                      <Link to={`/detail_pengambilan/${item.id}`}>{item.residence_type}</Link>
                    </h2>
                    <p className="post-category">{item.phone_number}</p>
                    <p className="post-category">{item.address}</p>
                    <p className="post-category"></p>
                    <div className="post-meta">
                    <p className="post-date">
                      <b>{item.created_at}</b>
                    </p>
                  </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Riwayat;
