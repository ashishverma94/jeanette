import React from "react";
import "./style.css";

const HeroCard = ({ imgUrl, title, desc }) => {
  return (
    <div class="card bg-[#D3AEAE] pt-[15%] px-[2%] pb-[10%] gap-[10%] flex flex-col justify-between items-center cursor-pointer">
      <div>
        <div className=" text-center skills-and-expe-050-0">{title}</div>
      </div>
      <img src={imgUrl} alt="img" className="w-[28.3%] h-[30.2%]" />
      <div class="description ">
        <p className="para-scale">{desc}</p>
      </div>
    </div>
  );
};

export default HeroCard;
