import { Button } from "./Button";
import "../App.css";
import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="/videos/4K_60FPS Neon Animated Wallpaper - Valorant Fanart.mp4"
        autoPlay
        loop
        muted
      />
      <h1>Neon-Corporations</h1>
      <p>Veux-tu un coup de boost ? ?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Montez dans le sac !
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          BEST OF NEON <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
