import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="Footer">
      <div>
        <p>&copy; {currentYear}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
