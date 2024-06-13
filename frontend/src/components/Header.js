import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../store/useStore";

function Header() {
  const navigate = useNavigate()
  const user = useStore((state) => state.user) ?? JSON.parse(localStorage.getItem("user")) ?? "";
  const clearUser = useStore((state) => state.clearUser);
  const handleLogout = () => {
    clearUser();
    navigate("/login")
    localStorage.removeItem("user")
  };

  return (
    <>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <h1>ZeroWaste</h1>
          </Link>
          <nav id="navbar" className="navbar" style={{ marginRight: "40%" }}>
            <ul>
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/tentang">Tentang Kami</Link></li>
              <li><Link to="/layanan">Layanan</Link></li>
              <li><Link to="/berita">Berita</Link></li>
              {user ? (
                <>
                  
                  <li><Link to="/" className="buttonpickup" style={{ color: "#309434", marginLeft:"100px" }}>Request Pickup</Link></li>
                  <li><Link to="/riwayat" className="buttonpickup" style={{ color: "#309434", marginLeft:"100px" }}>Riwayat</Link></li>
                  <li style={{color:"#FFF"}}>{user.name}</li>
                  <li><button onClick={handleLogout} className="buttonsign">Logout</button></li>
                </>
              ) : (
                <li><Link to="/login" className="buttonsign">Hallo, Sign Disini!</Link></li>
              )}
            </ul>
          </nav>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        </div>
      </header>
    </>
  );
}

export default Header;
