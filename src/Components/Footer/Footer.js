import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div
      style={{
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",

        color: " #fff",
      }}
      className="copyright text-center "
    >
      <p className="copy-footer-29 text-white center">
        © 2019 - {date}. All rights reserved | Design by{" "}
        <a className="text-white" href="https://levbitz.com">
          levbitz
        </a>
      </p>
    </div>
  );
}

export default Footer;
