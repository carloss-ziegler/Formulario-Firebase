import React from "react";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer d-flex text-white">
      <div className="meu text-center">
        <p>Desenvolvido por</p>
        <img
          title="<DevZiegler/>"
          className="footer-img ml-2 mr-2"
          src="./ziegler_dev-fundo_branco.png"
          alt="Logo"
          height={47}
        />
        <p className="mt-1 text-color">
          &lt;<span>DevZiegler/</span>
          &gt;
        </p>
      </div>
      <div className="borda auto"></div>
      <div className="marmoreli">
        <ul>
          <a
            title="Página do Instagram"
            href="https://www.instagram.com/_marmoreli/"
            target="_blank"
            rel="noopener noreferrer"
            className="social_list text-dark mr-2"
          >
            <FaInstagram />
          </a>
        </ul>
        <p className="marmore">
          <span>Marmoraria Marmoreli</span>
          <br></br> &copy; 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
