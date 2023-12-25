import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <FaFacebook color="white" size={24} />
        <FaTwitter color="white" size={24} />
        <FaInstagram color="white" size={24} />
      </div>
      <span>Desenvolvido por Alura - Guilherme_dev</span>
    </footer>
  );
};

export default Footer;
