import React from 'react';
import "./Cover.css";
import Covervideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (<div className="cover-container">
        <video className="video" src={Covervideo} autoPlay loop muted />
        <h1>Bussines Development</h1>
        <p>Developer | Designer | Cloud solution | Bussines intelligence</p>
    </div>
  );
};
export default Cover 