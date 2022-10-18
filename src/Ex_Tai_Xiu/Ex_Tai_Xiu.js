import React from "react";
import IMG_35 from "../assets/bgGame.png";
import "./game.css";
import KetQua from "./KetQua";
import XucSac from "./XucSac"
export default function Ex_Tai_Xiu() {
  return (
    <div
      style={{
        backgroundImage: `url(${IMG_35})`,
        width:'100vw',
        height:'100vh',
      }}
      className="bg_game"
    >
        <XucSac/>
        <KetQua/>
    </div>
  );
}
