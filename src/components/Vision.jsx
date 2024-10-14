import Flower from "../assets/flower.png";
import Mobile from "../assets/phone.png";
import Phone from "../assets/iphone.png";
import Email from "../assets/email.png";

const Vision = () => {
  return (
    <div className=" bg-[#5686E1] h-[100vh] w-full pt-[20px]">
      {/* PART I  */}
      <div className=" h-[126px] w-full px-[18px]">
        <div className="w-full h-full bg-[white] flex flex-row justify-between px-[20px]">
          <div className="flex flex-row items-center">
            <img src={Flower} alt="flower" />
            <span className="text-[#FF6B1A] font-[600] text-[60px] leading-[72px]">
              What's Holding You Back?
            </span>
            <img src={Flower} alt="flower" />
          </div>
          <div className=" flex justify-center flex-col">
            <div className="flex flex-row gap-[24px] items-center">
              <img src={Mobile} alt="" className="" />
              <span className="text-[#5686E1] text-[24px] font-[600]">
                623-337-4706
              </span>
            </div>
            <div className="flex flex-row gap-[24px] items-center">
              <img src={Phone} alt="" className="" />
              <span className="text-[#5686E1] text-[24px] font-[600]">
                480-772-3405
              </span>
            </div>
            <div className="flex flex-row gap-[24px] items-center">
              <img src={Email} alt="" className="" />
              <span className="text-[#5686E1] text-[24px] font-[600]">
                Jeanettewilson@cox.net
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* PART II  */}
      
    </div>
  );
};

export default Vision;
