import React from "react";

function Navbar() {
return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><i className="bi bi-list"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link active text-white" href="#">About<span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white">Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
);
};

export default Navbar
