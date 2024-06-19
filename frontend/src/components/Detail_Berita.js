import React from "react";

function Detail_Berita() {
  return (
    <>
      <div>
        {/* ======= Blog Details Section ======= */}
        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="row g-5">
              <div className="col-lg-8">
                <article className="blog-details">
                  <div className="post-img">
                    <center>
                      <img
                        src="assets/img/berita.jpg"
                        alt
                        className="img-fluid"
                      />
                    </center>
                  </div>
                  <h2 className="title">
                    Anak Muda Ajak Masyarakat Peduli Lingkungan dan Perubahan
                    Lingkungan
                  </h2>
                  <div className="meta-top">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-person" /> <a href="">inilah.com</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock" />{" "}
                        <a href="">
                          <time dateTime="2020-01-01">Apr 1, 2024</time>
                        </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-chat-dots" />{" "}
                        <a href="">12 Comments</a>
                      </li>
                    </ul>
                  </div>
                  {/* End meta top */}
                  <div className="content">
                    <p>
                      Suka atau tidak suka, masyarakat Indonesia khususnya yang
                      tinggal di kaawasan terpencil dengan perekonomian
                      pas-pasan, banyak yang tak mengerti dampak dari perubahan
                      iklim. Perlu literasi yang cukup dari berbagai kalangan
                      anak muda yang melek lingkungan.
                    </p>
                    <p>
                      Verena Puspawardani, Direktur Program Koaksi Indonesia,
                      tergugah untuk membuat dua film Climate Witness bertajuk
                      Ekspresi Aksi Iklim Bersama Masyarakat Urban di Jakarta.
                      Isinya menceritakan soal klim lokal di Nusa Tenggara Timur
                      (NTT). “Tahun lalu, film ini diputar di 40 titik seluruh
                      Indonesia, “Climate Witness” berbasis aksi iklim lokal,
                      yang akhirnya menjadi pemantik untuk kampanye bersama,”
                      jelas Verena, dalam sebuah diskusi di Jakarta, dikutip
                      Senin (1/4/2024).
                    </p>
                    <p>
                      Vera Nofita, Ketua Bank Sampah Gunung Emas, membeberkan
                      perjalanan Bank Sampah Gunung Emas yang pernah meraih
                      penghargaan bank sampah terbaik nasional 2023 dari Menteri
                      Lingkungan Hidup dan Kehutanan (LHK) Siti Nurbaya.
                    </p>
                    <p>
                      Didirikan sejak 2014, kata Vera, Bank Sampah Gunung Emas
                      konsisten menjalankan aksi iklim dengan mengedukasi
                      masyarakat. Khususnya menggugah kepedulian para ibu rumah
                      tangga terhadap lingkungan. Termasuk upaya memilah sampah
                      yang mengancam lingkungan.
                    </p>
                    <center>
                      <img
                        src="assets/img/berita.jpg"
                        className="img-fluid"
                        alt
                      />
                    </center>
                    <p></p>
                    <p>
                      Vera menerangkan, pendekatan yang dilakukan mulai dari
                      memberdayakan ibu rumah tangga di lingkup RT, RW, sekolah,
                      mahasiswa, hingga tokoh masyarakat. “Awalnya, saya
                      mengajak para perempuan, ibu rumah tangga, tidak bekerja,
                      namun tetap bisa produktif dengan menghasilkan uang dari
                      sampah. Sebagian besar golongan berpenghasilan Rp 50 ribu
                      per minggu, saya dorong mereka menabung, menabung sampah,”
                      ujar Vera.
                    </p>
                    <p>
                      Vera memaparkan tujuan aksinya untuk membuka pola pikir
                      khususnya para perempuan, untuk mengatur hidup maka
                      kelolalah sampah bisa bernilai ekonomi. Di mana,
                      penghasilan mitra bank sampah bisa mencapai Rp2 juta per
                      bulan. Mengenai aturan, pemerintah sudah hadir melalui
                      beberapa kebijakan, peraturan tersebut bahkan spesifik
                      mengatur pengelolaan dan pemilahan sampah rumah tangga.
                    </p>
                  </div>
                  {/* End post content */}
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* End Blog Details Section */}
      </div>
    </>
  );
}

export default Detail_Berita;
