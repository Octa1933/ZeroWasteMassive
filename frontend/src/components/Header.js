import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../store/useStore";

function Header() {
  const navigate = useNavigate();
  const user =
    useStore((state) => state.user) ??
    JSON.parse(localStorage.getItem("user")) ??
    "";
  const clearUser = useStore((state) => state.clearUser);
  const handleLogout = () => {
    clearUser();
    navigate("/login");
    localStorage.removeItem("user");
  };

  return (
    <>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center justify-content-between w-100 text-white w-full">
            <div className="d-flex gap-5 align-items-center text-white">
              <Link to="/">
                <img src="assets/img/logo.png" />
              </Link>

              <div className="d-none d-lg-flex gap-4">
                <div className="font-thin mr-3">
                  <Link to="/" className="text-white">
                    Beranda
                  </Link>
                </div>
                <div className="mr-3">
                  <Link to="/tentang" className="text-white">
                    Tentang Kami
                  </Link>
                </div>
                <div className="mr-3">
                  <Link to="/layanan" className="text-white">
                    Layanan
                  </Link>
                </div>
                <div className="mr-3">
                  <Link to="/berita" className="text-white">
                    Berita
                  </Link>
                </div>
              </div>
            </div>

            <div className="d-none d-lg-flex gap-4">
              <div className="d-flex gap-4 align-items-center ml-auto">
                <Link
                  to="/"
                  className="btn bg-white rounded-pill py-2 px-4 font-bold shadow"
                  style={{ color: "#309434", fontWeight: "bold" }}
                >
                  Request Pickup
                </Link>
                {user ? (
                  <>
                    <div class="dropstart">
                      <div
                        className="avatar-profile"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="https://s3-alpha-sig.figma.com/img/6424/3f59/5486b47cf35b6009f41bec7dc952603d?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NdM0rDOF3gDydFkZheGuVPyhyq3j70tXt~0zwh2m~mz9M~nVtCA~Atxowyg4nkkQsBnMyvvfTBeuV-FzkVCNQ5jl8f5CDkHPh4OMD3RZxFEJlhRaRXkAUbwPfL9Y1BCe~s42p7vffq7kZnCKL0DS~LSw6i0zGe8x4kKBBvF2Vf1epMXYuS2SnA2KFbPMJ3HqFJTpfA8lAmYd0h0uQ2sMgJcxM3Lc97oXkwFPrPDaAYXKLW5qU5k-aBXTXTULAwgvB1pWPyPPHx403qALXsAoXolMe8nytv1W3DhEzeRQGTgblkUoTKpPpKtYzputpAIROnawMoVz7y1r7P2Rv75hlQ__"
                          alt=""
                        />
                      </div>
                      <ul
                        class="dropdown-menu rounded-xl shadow p-4"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <div className="">
                            <div className="d-flex align-items-center gap-3">
                              <div
                                className="avatar-profile"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/6424/3f59/5486b47cf35b6009f41bec7dc952603d?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NdM0rDOF3gDydFkZheGuVPyhyq3j70tXt~0zwh2m~mz9M~nVtCA~Atxowyg4nkkQsBnMyvvfTBeuV-FzkVCNQ5jl8f5CDkHPh4OMD3RZxFEJlhRaRXkAUbwPfL9Y1BCe~s42p7vffq7kZnCKL0DS~LSw6i0zGe8x4kKBBvF2Vf1epMXYuS2SnA2KFbPMJ3HqFJTpfA8lAmYd0h0uQ2sMgJcxM3Lc97oXkwFPrPDaAYXKLW5qU5k-aBXTXTULAwgvB1pWPyPPHx403qALXsAoXolMe8nytv1W3DhEzeRQGTgblkUoTKpPpKtYzputpAIROnawMoVz7y1r7P2Rv75hlQ__"
                                  alt=""
                                />
                              </div>
                              <div className="">
                                <div className="fw-bold">{user.name} </div>
                                <div className="text-gray">{user.email}</div>
                              </div>
                              <div className="badge-blue fw-bold fs-7">PRO</div>
                            </div>
                            <div className="border-bottom my-3"></div>

                            <div className="d-flex flex-column gap-4">
                              <div className="d-flex gap-4 align-items-center cursor-pointer">
                                <img src="assets/img/settings.svg" alt="" />
                                <div className="fw-bold">
                                  Pengaturan Profile
                                </div>
                              </div>
                              <div className="d-flex gap-4 align-items-center cursor-pointer">
                                <img src="assets/img/help.svg" alt="" />
                                <div className="fw-bold">Bantuan</div>
                              </div>
                              <div className="d-flex gap-4 align-items-center cursor-pointer">
                                <img src="assets/img/upgrade.svg" alt="" />
                                <div className="fw-bold">Upgrade Layanan</div>
                              </div>
                              <div className="border-bottom"></div>
                              <div
                                onClick={handleLogout}
                                className="d-flex gap-4 align-items-center cursor-pointer"
                              >
                                <img src="assets/img/signout.svg" alt="" />
                                <div className="fw-bold">Keluar</div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="ml-3">
                    <Link
                      to="/login"
                      className="text-white"
                      style={{ color: "#309434" }}
                    >
                      Hallo, Sign Disini!
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="d-block d-lg-none">
            <div class="dropstart">
              <div
                className="btn-burger"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="assets/img/burger.svg" alt="" />
              </div>
              <ul
                class="dropdown-menu rounded-xl shadow p-4 min-w-nav"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <div className="">
                    {user ? (
                      <div className="d-flex flex-column gap-4">
                        <div className="d-flex align-items-center gap-3">
                          <div
                            className="avatar-profile"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img
                              src="https://s3-alpha-sig.figma.com/img/6424/3f59/5486b47cf35b6009f41bec7dc952603d?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NdM0rDOF3gDydFkZheGuVPyhyq3j70tXt~0zwh2m~mz9M~nVtCA~Atxowyg4nkkQsBnMyvvfTBeuV-FzkVCNQ5jl8f5CDkHPh4OMD3RZxFEJlhRaRXkAUbwPfL9Y1BCe~s42p7vffq7kZnCKL0DS~LSw6i0zGe8x4kKBBvF2Vf1epMXYuS2SnA2KFbPMJ3HqFJTpfA8lAmYd0h0uQ2sMgJcxM3Lc97oXkwFPrPDaAYXKLW5qU5k-aBXTXTULAwgvB1pWPyPPHx403qALXsAoXolMe8nytv1W3DhEzeRQGTgblkUoTKpPpKtYzputpAIROnawMoVz7y1r7P2Rv75hlQ__"
                              alt=""
                            />
                          </div>
                          <div className="">
                            <div className="fw-bold">{user.name} </div>
                            <div className="text-gray">{user.email}</div>
                          </div>
                          <div className="badge-blue fw-bold fs-7">PRO</div>
                        </div>
                        <div className="border-bottom"></div>
                        <div className="d-flex gap-4 align-items-center cursor-pointer">
                          <img src="assets/img/settings.svg" alt="" />
                          <div className="fw-bold">Pengaturan Profile</div>
                        </div>
                        <div className="d-flex gap-4 align-items-center cursor-pointer">
                          <img src="assets/img/help.svg" alt="" />
                          <div className="fw-bold">Bantuan</div>
                        </div>
                        <div className="d-flex gap-4 align-items-center cursor-pointer">
                          <img src="assets/img/upgrade.svg" alt="" />
                          <div className="fw-bold">Upgrade Layanan</div>
                        </div>
                        <div className="border-bottom"></div>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="d-flex flex-column gap-4 mt-4">
                      <div className="d-flex flex-column d-lg-none gap-4">
                        <div className="font- mr-3">
                          <Link to="/" className="black">
                            Beranda
                          </Link>
                        </div>
                        <div className="mr-3">
                          <Link to="/tentang" className="black">
                            Tentang Kami
                          </Link>
                        </div>
                        <div className="mr-3">
                          <Link to="/layanan" className="black">
                            Layanan
                          </Link>
                        </div>
                        <div className="mr-3">
                          <Link to="/berita" className="black">
                            Berita
                          </Link>
                        </div>
                      </div>

                      <div className="border-bottom"></div>

                      {user ? (
                        <div
                          onClick={handleLogout}
                          className="d-flex gap-4 align-items-center cursor-pointer"
                        >
                          <img src="assets/img/signout.svg" alt="" />
                          <div className="fw-bold">Keluar</div>
                        </div>
                      ) : (
                        <div
                          onClick={handleLogout}
                          className="d-flex gap-4 align-items-center cursor-pointer"
                        >
                          {/* <img src="assets/img/signout.svg" alt="" /> */}
                          <div className="fw-bold">Sign In disini!</div>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
