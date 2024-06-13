import React from "react";

function Footer() {
  return (
    <>
      

   <div>
  {/* ======= Footer ======= */}
  <footer id="footer" className="footer">
    <center><h1><b>ZeroWaste</b></h1>
      <br />
      <br />
      <h4>Jl.Kota Bambu Utara IV No.5 RT.1/RW.9, Jatipulo,Kec.Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota jakarta 11430</h4>
    </center>
    <hr />
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <nav id="navbar" className="navbar" style={{marginLeft: '30%'}}>
        <ul>
          <li><a href="index.html">Beranda</a></li>
          <li><a href="tentang.html">Tentang Kami</a></li>
          <li><a href="layanan.html">Layanan</a></li>
          <li><a href="berita.html">Berita</a></li>
          <li><a href="kontak.html">Kontak Kami</a></li>
        </ul>
      </nav>{/* .navbar */}
    </div>
    <hr />
  </footer>{/* End Footer */}
  {/* End Footer */}
  <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  <div id="preloader" />
</div>




    </>
  );
}

export default Footer;
