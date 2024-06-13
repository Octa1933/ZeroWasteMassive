import React from "react";

function Home() {
  return (
    <>
    
   <div>
  {/* ======= Hero Section ======= */}
  <section id="hero" className="hero">
    <div className="container position-relative">
      <div className="row gy-5" data-aos="fade-in">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h2>Mengangkut sampah anda sesuai jadwal yang anda tentukan!</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" className="btn-get-started">Lihat Layanan Kami</a>
            <a href className="buttontentang"><span>Tentang Layanan Kami</span></a>
          </div>
        </div>
      </div>
    </div>
    <div className="icon-boxes position-relative">
      <div className="container position-relative">
        <div className="row gy-4 mt-5">
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="icon-box">
              <div className="icon"><i className="bi bi-trash" /></div>
              <h4 className="title"><a href className="stretched-link">Ukuran Tempat Sampah</a></h4>
              <p className="isititle" style={{color: 'black'}}>Ukuran tempat sampah yang ideal tergantung pada jumlah yang dihasilkan dan frekuensi pengangkutan sampah.</p>
            </div>
          </div>{/*End Icon Box */}
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon-box">
              <div className="icon"><i className="bi bi-check-circle-fill" /></div>
              <h4 className="title"><a href className="stretched-link">Sampah Yang Kami Ambil</a></h4>
              <p className="isititle" style={{color: 'black'}}>Siap melayani atau Mengangkut macam-macam jenis sampah.</p>
            </div>
          </div>{/*End Icon Box */}
          <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="icon-box">
              <div className="icon"><i className="bi bi-calendar4-week" /></div>
              <h4 className="title"><a href className="stretched-link">Jadwal Penjemputan</a></h4>
              <p className="isititle" style={{color: 'black'}}>Mengangkut sampah tepat pada waktunya dan sesuai jadwal yang ditentukan.</p>
            </div>
          </div>{/*End Icon Box */}
        </div>
      </div>
    </div>
  </section>
  {/* End Hero Section */}
  <main id="main">
    {/* ======= About Us Section ======= */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6">
            <h1><b>Layanan Sampah</b></h1>
            <br />
            <h3>Menyediakan beberapa macam-macam sampah yang siap diangkut.</h3>
            <br />
            <br />
            <a href="#about" className="buttonselengkapnya">Selengkapnya</a>
          </div>
          <div className="col-lg-3 col-md-5">
            <div className="service-item  position-relative">
              <h3>Pengangkutan Sampah Plastik</h3>
              <p>Layanan pengangkutan sampah plastik dengan bobot minimum 50kg/kantong</p>
              <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
            </div>
          </div>{/* End Service Item */}
          <div className="col-lg-3 col-md-5">
            <div className="service-item  position-relative">
              <h3>Pengangkutan Barang Besar</h3>
              <p>Layanan pengangkutan sampah barang besar dengan bobot diatas 50kg</p>
              <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
            </div>
          </div>{/* End Service Item */}
        </div>
      </div>
    </section>{/* End About Us Section */}
    {/* ======= Testimonials Section ======= */}
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Berita Terbaru</h2>
        </div>
        <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay={100}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="assets/img/berita/berita.png" className="testimonial-img flex-shrink-0" alt style={{width: '100%', borderRadius: 10}} />
                  <div className="d-flex align-items-center">
                    <div>
                      <h3>Indonesia Sukses kelola 11,5 juta ton sampah di 2023</h3>
                    </div>
                  </div>
                  <p>
                    Pemerintah Indonesia mencanangkan target Indonesia bersih sampah 2025, Melalui 30% pengurangan sampah dan 70% penanganan sampah pada tahun 2025. Untuk mewujudkan target tersebut, sudah dilakukan edukasi mengenai pentingnya pengelolaan sampah serta mendorong keterlibatan berbagai pihak dalam penanggulangan permasalahan sampah.
                  </p>
                  <a href><b>Baca Selengkapnya&gt;&gt;&gt;</b></a>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="assets/img/berita/berita.png" className="testimonial-img flex-shrink-0" alt style={{width: '100%', borderRadius: 10}} />
                  <div className="d-flex align-items-center">
                    <div>
                      <h3>Indonesia Sukses kelola 11,5 juta ton sampah di 2023</h3>
                    </div>
                  </div>
                  <p>
                    Pemerintah Indonesia mencanangkan target Indonesia bersih sampah 2025, Melalui 30% pengurangan sampah dan 70% penanganan sampah pada tahun 2025. Untuk mewujudkan target tersebut, sudah dilakukan edukasi mengenai pentingnya pengelolaan sampah serta mendorong keterlibatan berbagai pihak dalam penanggulangan permasalahan sampah.
                  </p>
                  <a href><b>Baca Selengkapnya&gt;&gt;&gt;</b></a>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="assets/img/berita/berita.png" className="testimonial-img flex-shrink-0" alt style={{width: '100%', borderRadius: 10}} />
                  <div className="d-flex align-items-center">
                    <div>
                      <h3>Indonesia Sukses kelola 11,5 juta ton sampah di 2023</h3>
                    </div>
                  </div>
                  <p>
                    Pemerintah Indonesia mencanangkan target Indonesia bersih sampah 2025, Melalui 30% pengurangan sampah dan 70% penanganan sampah pada tahun 2025. Untuk mewujudkan target tersebut, sudah dilakukan edukasi mengenai pentingnya pengelolaan sampah serta mendorong keterlibatan berbagai pihak dalam penanggulangan permasalahan sampah.
                  </p>
                  <a href><b>Baca Selengkapnya&gt;&gt;&gt;</b></a>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="assets/img/berita/berita.png" className="testimonial-img flex-shrink-0" alt style={{width: '100%', borderRadius: 10}} />
                  <div className="d-flex align-items-center">
                    <div>
                      <h3>Indonesia Sukses kelola 11,5 juta ton sampah di 2023</h3>
                    </div>
                  </div>
                  <p>
                    Pemerintah Indonesia mencanangkan target Indonesia bersih sampah 2025, Melalui 30% pengurangan sampah dan 70% penanganan sampah pada tahun 2025. Untuk mewujudkan target tersebut, sudah dilakukan edukasi mengenai pentingnya pengelolaan sampah serta mendorong keterlibatan berbagai pihak dalam penanggulangan permasalahan sampah.
                  </p>
                  <a href><b>Baca Selengkapnya&gt;&gt;&gt;</b></a>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="assets/img/berita/berita.png" className="testimonial-img flex-shrink-0" alt style={{width: '100%', borderRadius: 10}} />
                  <div className="d-flex align-items-center">
                    <div>
                      <h3>Indonesia Sukses kelola 11,5 juta ton sampah di 2023</h3>
                    </div>
                  </div>
                  <p>
                    Pemerintah Indonesia mencanangkan target Indonesia bersih sampah 2025, Melalui 30% pengurangan sampah dan 70% penanganan sampah pada tahun 2025. Untuk mewujudkan target tersebut, sudah dilakukan edukasi mengenai pentingnya pengelolaan sampah serta mendorong keterlibatan berbagai pihak dalam penanggulangan permasalahan sampah.
                  </p>
                  <a href><b>Baca Selengkapnya&gt;&gt;&gt;</b></a>
                </div>
              </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img src="assets/img/berita/berita.png" className="testimonial-img flex-shrink-0" alt style={{width: '100%', borderRadius: 10}} />
                  <div className="d-flex align-items-center">
                    <div>
                      <h3>Indonesia Sukses kelola 11,5 juta ton sampah di 2023</h3>
                    </div>
                  </div>
                  <p>
                    Pemerintah Indonesia mencanangkan target Indonesia bersih sampah 2025, Melalui 30% pengurangan sampah dan 70% penanganan sampah pada tahun 2025. Untuk mewujudkan target tersebut, sudah dilakukan edukasi mengenai pentingnya pengelolaan sampah serta mendorong keterlibatan berbagai pihak dalam penanggulangan permasalahan sampah.
                  </p>
                  <a href><b>Baca Selengkapnya&gt;&gt;&gt;</b></a>
                </div>
              </div>
            </div>{/* End testimonial item */}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>{/* End Testimonials Section */}
    {/* ======= Hero Section ======= */}
    <section id="ambil" className="ambil">
      <div className="section-header">
        <h2>Sampah Yang Kami Ambil</h2>
      </div>
      <div className="icon-boxes position-relative">
        <div className="container position-relative">
          <div className="row gy-4 mt-5">
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={100} data-bs-target="#faq-content-1">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-recycle" /></div>
                <h4 className="title">Daur Ulang</h4>
                <p className="isititle" style={{color: 'black', textAlign: 'justify'}}>Optimalkan dampak positif anda terhadap lingkungan dengan layanan daur ulang kami yang efisien dan bertanggung jawab, mengubah limbah menjadi sumber yang bernilai. Mulailah hari ini untuk mewujudkan perubahan yang berkelanjutan.</p>
              </div>
            </div>{/*End Icon Box */}
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="icon-box">
                <div className="icon"><i className="bi bi-box" /></div>
                <h4 className="title"><a href className="stretched-link">Barang Pribadi</a></h4>
                <p className="isititle" style={{color: 'black', textAlign: 'justify'}}>Kemudahan dan keamanan dalam membuang sampah oribadi anda adalah prioritas kami. Dengan layanan kami, Anda dapat dengan nyaman menyingkirkan limbah rumah tangga anda. Memberikan anda kebebasan untuk fokus pada hal-hal yang benar-benar penting dalam hidup anda. Percayakan pada kami untuk menjaga lingkungan anda bersih dan sehat!</p>
              </div>
            </div>{/*End Icon Box */}
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="icon-box">
                <div className="icon"><i className="bi bi-safe2" /></div>
                <h4 className="title"><a href className="stretched-link">Furniture</a></h4>
                <p className="isititle" style={{color: 'black', textAlign: 'justify'}}>Berikan sentuhan segar pada ruang anda dengan layanan kami untuk membuang furniture yang sudah tidak terpakai lagi. Kami menyediakan solusi cepat dan efisien untuk menghapus furniture lama anda, memberikan ruang untuk inspirasi baru dan membantu anda mengubah rumah anda menjadi tempat yang lebih nyaman dan berenergi positif.</p>
              </div>
            </div>{/*End Icon Box */}
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="icon-box">
                <div className="icon"><i className="bi bi-bricks" /></div>
                <h4 className="title"><a href className="stretched-link">Puing</a></h4>
                <p className="isititle" style={{color: 'black', textAlign: 'justify'}}>Dengan layanan kami, Anda tidal perlu lagi khawatir tentang bagaimana membuang sampah limbah konstruksi. kami menawarkan solusi yang efisien dan ramah lingkungan untuk membersihkan area konstruksi anda dari segala jenis sampah. Percayakan pada tim ahli kami untuk menangani limbah konstruksi anda dengan cepat dan aman, sehingga anda dapat fokus pada menyelesaikan proyek anda tanpa gangguan.</p>
              </div>
            </div>{/*End Icon Box */}
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="icon-box">
                <div className="icon"><i className="bi bi-tree" /></div>
                <h4 className="title"><a href className="stretched-link">Pohon</a></h4>
                <p className="isititle" style={{color: 'black', textAlign: 'justify'}}>Dengan layanan kami, tidak perlu repot lagi memikirkan bagaimana cara membuang limbah pohon. Tim kami siap membantu membersihkan area anda dari segala jenis sampah pohon dengan cepat dan efisien. percayakan pada kami untuk mengurus limbah pohon anda sehingga anda dapat fokus pada hal-hal lain yang lebih penting dalam proyek anda.</p>
              </div>
            </div>{/*End Icon Box */}
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="icon-box">
                <div className="icon"><i className="bi bi-house" /></div>
                <h4 className="title"><a href className="stretched-link">Dapur</a></h4>
                <p className="isititle" style={{color: 'black', textAlign: 'justify'}}>Ringankan beban dapur anda dengan layanan kami yang efisien untuk membuang sampah. Kami siap membantu membersihkan dan mengelola limbah dapur anda, memberikan anda lingkungan yang bersih dan segar untuk menikmati waktu memasak tanpa gangguan. Percayakan pada kami untuk membuat dapur anda tetap rapi dan nyaman setip hari.</p>
              </div>
            </div>{/*End Icon Box */}
          </div>
        </div>
      </div>
    </section>
    {/* End Hero Section */}
    {/* ======= About Us Section ======= */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6">
            <h2><b>Kami Siap Melayani Dengan Sepenuh Hati</b></h2>
            <img src="assets/img/bg3.png" className="img-fluid rounded-4 mb-4" alt />
          </div>
          <div className="col-lg-6">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="content ps-0 ps-lg-5">
              <p style={{textAlign: 'justify', fontSize: 22}}>
                Kami didukung oleh tim yang berpengalaman dan bersemangat dalam bidang pengelolaan sampah dan teknologi. Tim kami terdiri dari para ahli dibidang lingkungan, Pengembang aplikasi, Dan petugas kebersihan yang handal. Kami percaya bahwa dengan keahlian dan dedikasi kami miliki, Kami dapat memberikan kontribusi yang nyata dalam menjaga kebersihan dan kesehatan lingkungan di sekitar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End About Us Section */}
  </main>{/* End #main */}
</div>


    </>
  );
}

export default Home;
