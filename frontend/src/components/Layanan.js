import React from "react";

function Layanan() {
  return (
    <>
    
   <div>


   <div>
  {/* ======= About Us Section ======= */}
  <section id="about" className="about">
    <div className="container" data-aos="fade-up">
      <div className="row gy-4">
        <div className="col-lg-6">
          <h1><b>Ingin sampah anda diangkut? Segera kontak kami!</b></h1>
          <p>Ngurusin properti tuh emang gak gampang ya. Banyak urusan teknis yang harus diurus, Tapi jangan sampe urusan pengumpulan sampah jadi tambah ribet. Nah, Ini dia solusinya!</p>
          <p>Percayakan aja pada Waste Connctions buat ngatasi masalah itu semua. Kami bakal bantuin buat bikin tempat kamu jadi bersih dan ramah lingkungan!</p>
          <a href="#about" className="buttonhubungi">Hubungi Kami</a>
          <br />
          <br />
          <div className="responsive-two-column-grid">
            <div>
              <h2><b>24 Jam</b></h2>
              <p>Customer Service kami siap melayani anda</p>
            </div>
            <div>
              <h2><b>60+</b></h2>
              <p>Lebih dari 60 pegawai kami siap mengangkut sampah anda</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content ps-0 ps-lg-5">
            <div className="position-relative mt-4">
              <img src="assets/img/layanan1.png" className="img-fluid rounded-4" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End About Us Section */}
  {/* ======= Pricing Section ======= */}
  <section id="pricing" className="pricing sections-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Harga &amp; Rencana</h2>
        <h3>Pilih layanan kami sesuai dengan kebutuhan rumah anda!</h3>
      </div>
      <div className="row g-4 py-lg-5" data-aos="zoom-out" data-aos-delay={100}>
        <div className="col-lg-4">
          <div className="pricing-item">
            <h3>Standard</h3>
            <div className="icon">
              <i className="bi bi-box" />
            </div>
            <h4><sup>Rp</sup>25.000<span> /Perbulan</span></h4>
            <ul>
              <li><i className="bi bi-check" /> Pengambilan setiap hari rabu</li>
              <li><i className="bi bi-check" /> Jarak maksimal 10 KM</li>
              <li><i className="bi bi-check" /> Maksimal berat smapah 15 KG</li>
              <li className="na"><i className="bi bi-x" /> <span>Wadah sampah organik anorganik dari ZeroWaste</span></li>
              <li className="na"><i className="bi bi-x" /> <span>Prioritas customer service</span></li>
            </ul>
            <div className="text-center"><a href="/pesan" className="buy-btn">Pesan</a></div>
          </div>
        </div>{/* End Pricing Item */}
        <div className="col-lg-4">
          <div className="pricing-item featured">
            <h3>Pro</h3>
            <div className="icon">
              <i className="bi bi-airplane" />
            </div>
            <h6 style={{textDecoration: 'line-through'}}><sup>Rp</sup>75.000<span> /Perbulan</span></h6>
            <h4><sup>Rp</sup>50.000<span> /Perbulan</span></h4>
            <ul>
              <li><i className="bi bi-check" /> Pengambilan setiap hari rabu dan sabtu</li>
              <li><i className="bi bi-check" /> Jarak maksimal 15 KM</li>
              <li><i className="bi bi-check" /> Maksimal berat sampah 30 KG</li>
              <li><i className="bi bi-check" /> Wadah sampah organik dari ZeroWaste</li>
              <li><i className="bi bi-check" /> Prioritas customer service</li>
            </ul>
            <div className="text-center"><a href="/pesan" className="buy-btn">Pesan sekarang!</a></div>
          </div>
        </div>{/* End Pricing Item */}
        <div className="col-lg-4">
          <div className="pricing-item">
            <h3>Exclusive</h3>
            <div className="icon">
              <i className="bi bi-send" />
            </div>
            <h4><sup>Rp</sup>100.000<span> /Perbulan</span></h4>
            <ul>
              <li><i className="bi bi-check" /> Pengambilan 3 kali dan waktu ditentukan oleh anda!</li>
              <li><i className="bi bi-check" /> Jarak maksimal 20 KM</li>
              <li><i className="bi bi-check" /> Maksimal berat sampah 50 KG</li>
              <li><i className="bi bi-check" /> Wadah sampah organik anorganik dari ZeroWaste</li>
              <li><i className="bi bi-check" /> Prioritas customer service</li>
            </ul>
            <div className="text-center"><a href="/pesan" className="buy-btn">Pesan</a></div>
          </div>
        </div>{/* End Pricing Item */}
      </div>
    </div>
  </section>{/* End Pricing Section */}
  {/* ======= Our Services Section ======= */}
  <section id="services" className="services sections-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Bagaimana Cara Pesan Penjemputan?</h2>
      </div>
      <div className="row gy-4" data-aos="fade-up" data-aos-delay={100}>
        <div className="col-lg-4 col-md-6">
          <div className="service-item  position-relative">
            <div className="icon">
              <i className="bi bi-phone" />
            </div>
            <h3>Pilih Layanan Dan Durasi</h3>
            <p>Pilih layanan yang sesuai dengan kebutuhan anda.</p>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-trash" />
            </div>
            <h3>Buanglah sampah di tempat sampah anda</h3>
            <p>Pastikan sampah anda dibuang di tempat sampah anda</p>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-check-circle-fill" />
            </div>
            <h3>Pengambilan sampah</h3>
            <p>Team kami akan melakukan pengambilan sampah dirumah anda berdasarkan layanan yang anda pilih.</p>
          </div>
        </div>{/* End Service Item */}
      </div>
    </div>
  </section>{/* End Our Services Section */}
  {/* ======= Contact Section ======= */}
  <section id="contact" className="contact">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Contact</h2>
      </div>
      <div className="row gx-lg-0 gy-4" style={{marginLeft: '10%'}}>
        <div className="col-lg-4">
          <div className="info-container d-flex flex-column align-items-center justify-content-center">
            <div className="info-item d-flex">
              <i className="bi bi-geo-alt flex-shrink-0" />
              <div>
                <h4>Alamat</h4>
                <p>Jl.Kota Bambu Utara IV No.5 RT.1/RW.9, Jatipulo,Kec.Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota jakarta 11430</p>
              </div>
            </div>{/* End Info Item */}
            <div className="info-item d-flex">
              <i className="bi bi-phone flex-shrink-0" />
              <div>
                <h4>Telepon</h4>
                <p>+62 857 1417 9057</p>
              </div>
            </div>{/* End Info Item */}
            <div className="info-item d-flex">
              <i className="bi bi-whatsapp flex-shrink-0" />
              <div>
                <h4>WhatsApp</h4>
                <p>+62 857 1417 9057</p>
              </div>
            </div>{/* End Info Item */}
            <div className="info-item d-flex">
              <i className="bi bi-envelope flex-shrink-0" />
              <div>
                <h4>Surel</h4>
                <p>Zerowaste46@gmail.com</p>
              </div>
            </div>{/* End Info Item */}
          </div>
        </div>
        <div className="col-lg-8">
          <img src="assets/img/map.png" className="img-fluid rounded-4" alt />
        </div>{/* End Contact Form */}
      </div>
    </div>
  </section>{/* End Contact Section */}
</div>



   </div>

   </>
  );
}

export default Layanan;