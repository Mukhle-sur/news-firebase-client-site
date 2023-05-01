import React from "react";
import QZone1 from "../../../assets/qZone1.png";
import QZone2 from "../../../assets/qZone2.png";
import QZone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-light mt-4 py-4 text-center">
      <h4>Q-Zone</h4>
      <div>
        <img src={QZone1} alt="" />
        <img src={QZone2} alt="" />
        <img src={QZone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
