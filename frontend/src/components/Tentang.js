import React from "react";

function Tentang() {
  return (
    <>
    
   <div>

   <div>
  {/* ======= Hero Section ======= */}
  <section id="tentang" className="hero">
    <div className="container position-relative">
      <div className="row gy-5" data-aos="fade-in">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h2>Tentang Kami</h2>
        </div>
      </div>
    </div>
  </section>
  {/* End Hero Section */}
  <main id="main">
    {/* ======= About Us Section ======= */}
    <section id="tentang" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6">
            <h3>MISSION</h3>
            <img src="assets/img/tentang1.png" className="img-fluid rounded-4 mb-4" alt />
            <p>Mempermudah akses masyarakat terhadap layanan pengangkutan sampah yang aman, terpecaya dan terjangkau.</p>
          </div>
          <div className="col-lg-6">
            <div className="content ps-0 ps-lg-5">
              <h3>STORY</h3>
              <p>
                Menjadi platform terdepan dalam pengelolaan sampah di Indonesia yang berkontribusi pada terciptanya lingkungan yang berkelanjutan dan ramah lingkungan.
              </p>
              <div className="position-relative mt-4">
                <img src="assets/img/tentang2.png" className="img-fluid rounded-4" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End About Us Section */}
  </main></div>

    


   </div>

   </>
  );
}

export default Tentang;