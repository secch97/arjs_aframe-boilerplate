import React from "react";
import { getYear } from "../../utils/getYear";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-nav-container">
        <nav className="footer-nav">
          <span className="footer-text"> © CTD Labs | {getYear()}</span>
          <Link href={"https://github.com/secch97/arjs_aframe-boirlerplate"} target="_blank">
            {" "}
            <FontAwesomeIcon
              icon={faGithub}
              size={"2x"}
              color="white"
            ></FontAwesomeIcon>
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
