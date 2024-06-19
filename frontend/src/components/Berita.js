import React from "react";

function Berita() {
  return (
    <>
      <div>
        <div>
          {/* ======= Stats Counter Section ======= */}
          <section id="stats-counter" className="stats-counter">
            <div className="container" data-aos="fade-up">
              <div className="row gy-4 align-items-center">
                <h1>
                  <b>Hot Topics</b>
                </h1>
                <div className="col-lg-6">
                  <img src="assets/img/berita.jpg" alt className="img-fluid" />
                </div>
                <div className="col-lg-6">
                  <h3>
                    Anak Muda Ajak Masyarakat Peduli Lingkungan dan Perubahan
                    Lingkungan
                  </h3>
                  <p>Senin, 1 April 2024 </p>
                  <h6 style={{ textAlign: "justify", fontSize: 19 }}>
                    Banyak masyarakat Indonesia di kawasan terpencil dengan
                    perekonomian pas-pasan tidak memahami dampak perubahan
                    iklim. Oleh karena itu, diperlukan literasi lingkungan dari
                    berbagai kalangan, terutama anak muda yang melek lingkungan.
                    Verena Puspawardani, Direktur Program Koaksi Indonesia,
                    membuat dua film "Climate Witness" berjudul "Ekspresi Aksi
                    Iklim Bersama Masyarakat Urban di Jakarta" yang menceritakan
                    kondisi iklim lokal di Nusa Tenggara Timur (NTT). Film ini
                    diputar di 40 titik di seluruh Indonesia tahun lalu dan
                    berhasil memantik kampanye bersama tentang aksi iklim.
                  </h6>
                  <a href="/detail_berita">
                    Baca Selengkapnya&gt;&gt;&gt;&gt;&gt;&gt;
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* End Stats Counter Section */}
          {/* ======= Blog Section ======= */}
          <section id="blog" className="blog">
            <div className="container" data-aos="fade-up">
              <h1>
                <b>Lates News</b>
              </h1>
              <br />
              <br />
              <div className="row gy-4 posts-list">
                <div className="col-xl-4 col-md-6">
                  <article>
                    <div className="post-img">
                      <img
                        src="assets/img/blog/berita5.jpg"
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="title">
                      <a href="/detail_berita">
                        Sukses Tangani 1,5 Ton Sampah TPS Gudang Selatan, Sekda
                        Apresiasi Kehadiran Relawan Pepeling Dispora
                      </a>
                    </h2>
                    <div className="d-flex align-items-center">
                      <div className="post-meta">
                        <p className="post-author-list">Bandung.id</p>
                        <p className="post-date">
                          <time dateTime="2022-01-01">Okt 30, 2023</time>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                {/* End post list item */}
                <div className="col-xl-4 col-md-6">
                  <article>
                    <div className="post-img">
                      <img
                        src="assets/img/blog/berita2.jpeg"
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="title">
                      <a href="/detail_berita">
                        Pengolahan Sampah Menjadi Energi Listrik (PSEL) sebagai
                        Intervensi Teknologi Mengurangi Volume Sampah
                      </a>
                    </h2>
                    <div className="d-flex align-items-center">
                      <div className="post-meta">
                        <p className="post-author-list">
                          Kementerian Bidang Perekonomian
                        </p>
                        <p className="post-date">
                          <time dateTime="2022-01-01">Jun 21, 2021</time>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                {/* End post list item */}
                <div className="col-xl-4 col-md-6">
                  <article>
                    <div className="post-img">
                      <img
                        src="assets/img/blog/berita6.jpg"
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="title">
                      <a href="/detail_berita">
                        Upaya Penanganan Permasalahan Sampah, MMD Bangun Bank
                        Sampah di Desa Permanu
                      </a>
                    </h2>
                    <div className="d-flex align-items-center">
                      <div className="post-meta">
                        <p className="post-author-list">Prasetya Online</p>
                        <p className="post-date">
                          <time dateTime="2022-01-01">Aug 18, 2023</time>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                {/* End post list item */}
                <div className="col-xl-4 col-md-6">
                  <article>
                    <div className="post-img">
                      <img
                        src="assets/img/blog/berita3.jpg"
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="title">
                      <a href="/detail_berita">
                        PT Vale kampanye peduli lingkungan lewat lomba daur
                        ulang sampah
                      </a>
                    </h2>
                    <div className="d-flex align-items-center">
                      <div className="post-meta">
                        <p className="post-author-list">Antara Sultra</p>
                        <p className="post-date">
                          <time dateTime="2022-01-01">Mar 5, 2024</time>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                {/* End post list item */}
                <div className="col-xl-4 col-md-6">
                  <article>
                    <div className="post-img">
                      <img
                        src="assets/img/blog/berita4.jpg"
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="title">
                      <a href="/detail_berita">
                        Kreatif, Warga Nambangan Lor Kelola Sampah Plastik
                        Melalui Ecobrick
                      </a>
                    </h2>
                    <div className="d-flex align-items-center">
                      <div className="post-meta">
                        <p className="post-author-list">Madiun Today</p>
                        <p className="post-date">
                          <time dateTime="2022-01-01">Oct 28, 2023</time>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                {/* End post list item */}
                <div className="col-xl-4 col-md-6">
                  <article>
                    <div className="post-img">
                      <img
                        src="assets/img/blog/beritaa.jpg"
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="title">
                      <a href="/detail_berita">
                        Efek Positif Pandawara Group, Masyarakat Pantai Sukaraja
                        Lebih Intensif Bersih-Bersih
                      </a>
                    </h2>
                    <div className="d-flex align-items-center">
                      <div className="post-meta">
                        <p className="post-author-list">Wartalampung.id</p>
                        <p className="post-date">
                          <time dateTime="2022-01-01">Oct 9, 2023</time>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                {/* End post list item */}
              </div>
              {/* End blog posts list */}
            </div>
          </section>
          {/* End Blog Section */}
        </div>
      </div>
    </>
  );
}

export default Berita;
