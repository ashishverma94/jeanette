import React from "react";

const HeroCard = ({ imgUrl ,title,desc}) => {
  return (
    <div class="card bg-[#D3AEAE] pt-[38px] px-[19px] pb-[28px] flex flex-col justify-between items-center cursor-pointer">
      <div>
        <div className="text-[36px] font-[600] text-center">
          {title}
        </div>
      </div>
      <img src={imgUrl} alt="img" />
      <div class="description">
        <p className="font-[400] text-[24px] leading-[29px]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
