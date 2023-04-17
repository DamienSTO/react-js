import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Rejoins l'élite Valorant en montant dans mon sac à dos !
        </p>
        <p className="footer-subscription-text">
          Tu ne peux pas te désabonner quand tu veux mdr.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Abonnez-vous</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Sur nous :</h2>
            <Link to="/sign-up">OTP Neon</Link>
            <Link to="/">Très gentil</Link>
            <Link to="/">Notre cliente préf (Shira)</Link>
          </div>
          <div class="footer-link-items">
            <h2> Nous contacter :</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media :</h2>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/surementlasalade/"
            >
              Instagram
            </a>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              N-CORP
            </Link>
          </div>
          <small class="website-rights">N-CORP © 2023</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
