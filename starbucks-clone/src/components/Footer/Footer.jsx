import "./Footer.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";

export function Footer() {
  return (
    <section className="footer inner">
      <div className="footer-info">
        <ul className="sns-link">
          <li>
            <a href="/">
              <AiFillTwitterCircle className="twitter icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <BsYoutube className="youtube icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <BsFacebook className="facebook icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <BsInstagram className="insta icon" />
            </a>
          </li>
        </ul>
        <p className="copyright">© 2023 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </section>
  );
}
