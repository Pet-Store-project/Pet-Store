import React, { useState } from "react";

const Navbar = () => {
  const [catsDropdownOpen, setCatsDropdownOpen] = useState(false);

  const toggleCatsDropdown = () => {
    setCatsDropdownOpen(!catsDropdownOpen);
    setDogsDropdownOpen(false);
  };
  const [dogsDropdownOpen, setDogsDropdownOpen] = useState(false);

  const toggleDogsDropdown = () => {
    setDogsDropdownOpen(!dogsDropdownOpen);
    setCatsDropdownOpen(false)
  };


  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5 ">
        <a href="" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 display-5 text-capitalize font-italic text-white">
            <span className="text-primary">Safety</span>First
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between px-3"
          id="navbarCollapse"
        >
          <div className="navbar-nav mr-auto py-0">
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>

            <a href="service.html" className="nav-item nav-link">
              Products
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                onClick={toggleCatsDropdown}
              >
                Cats
              </a>
              <div className={`dropdown-menu rounded-0 m-0 ${catsDropdownOpen ? "show" : ""
                }`}>
                <a href="blog.html" className="dropdown-item">
                  toys
                </a>
                <a href="single.html" className="dropdown-item">
                  food
                </a>
                <a href="single.html" className="dropdown-item">
                  upholstery
                </a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                onClick={toggleDogsDropdown}
              >
                Dogs
              </a>

              <div className={`dropdown-menu rounded-0 m-0 ${dogsDropdownOpen ? "show" : ""
                }`}>
                <a href="blog.html" className="dropdown-item">
                  toys
                </a>
                <a href="single.html" className="dropdown-item">
                  food
                </a>
                <a href="single.html" className="dropdown-item">
                  upholstery
                </a>
              </div>
            </div>

            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>


          <a
            href="Cart"
            className="btn btn-lg btn-primary px-3 d-none d-lg-block"
          >
            My Cart
          </a>


        </div>
      </nav>
    </div>
  );
};

export default Navbar;