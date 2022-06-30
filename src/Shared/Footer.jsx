import React from "react";
import footer from "../Assets/img/footer.webp";
import logo from "../Assets/img/logo.png";
import logo2 from "../Assets/img/logo 2.png";

const Footer = () => {
  return (
    <div>
      <img className="w-2/3 mx-auto" src={footer} alt="" />

      <div>
        <footer class="footer p-10 bg-base-200 text-base-content">
          <div>
            <img className="h-20" src={logo} alt="" />
            <p>
              Developed by Saleh Ahmed Mahin
              <br />
              &copy; All rights reserved
            </p>
            <img className="h-10" src={logo2} alt="" />
          </div>
          <div>
            <span class="footer-title">প্রয়োজনীয় লিংক</span>
            <a class="link link-hover">Facebook Group</a>
            <a class="link link-hover">YouTube</a>
          </div>
          <div>
            <span class="footer-title">যোগাযোগ</span>
            <a class="link link-hover">About us</a>
            <a class="link link-hover">Contact</a>
            <a class="link link-hover">Jobs</a>
            <a class="link link-hover">Press kit</a>
          </div>
          <div>
            <span class="footer-title">জরুরি হেল্প</span>
            <p>
              <span className="font-bold">মোবাইলঃ</span> +880 1111 111111
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
