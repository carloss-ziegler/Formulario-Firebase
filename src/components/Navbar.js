import React from "react";

import "./Navbar.css";

import { Link } from "react-router-dom";

import { BsFillHouseDoorFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <div className="navbar-div bg-dark">
      <nav className="navbar bg-dark py-2 d-flex">
        <img
          title="Marmoreli"
          className="nav-img ml-3 d-flex"
          src="./Logo.jpg"
          alt="Logo"
          height={47}
        />
        <h1 className="nav-text texto-nav text-white ml-5 text-center d-flex">
          Cadastro de Clientes
        </h1>
        <Link
          to="/"
          className="navbar-brand ml-5 text-white"
          title="Voltar à página inicial"
        >
          <BsFillHouseDoorFill /> <strong>Início</strong>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
