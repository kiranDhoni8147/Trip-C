import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { travelexperience } from '../src/assets';

const TravelExperience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="elevate-travel-experiences-section box-border overflow-hidden flex flex-col justify-center items-center h-fit w-screen py-[60px] pb-[70px] box-border bg-gray-300">
      <h2 className="section-header pb-[20px] text-[42px] font-bold text-black text-center sm-max:pb-[10px] sm-max:text-[22px]" data-aos="fade-up" data-aos-delay="100">
        Elevate Your Travel Experience
      </h2>
      <p className="w-[500px] text-[20px] leading-[30px] text-center text-gray-800 font-semibold sm-max:text-[16px] sm-max:w-full sm-max:leading-normal" data-aos="fade-up" data-aos-delay="200">
        Unmatched Professionalism. Impeccable Service. <br className="sm-max:hidden" /> Your Perfect Chauffeur-Driven Experience
      </p>
      <div className="travel-experience-offerings w-screen mt-[40px] flex justify-center items-center gap-[35px] sm-max:flex-col sm-max:p-[10px] sm-max:gap-[10px]">
        <div className="travel-experience-offerings-left h-[550px] w-[500px] sm-max:w-[100%] sm-max:h-fit" data-aos="fade-up" data-aos-delay="200">
          <img src={travelexperience} className="offering-img left object-cover rounded-lg h-[100%] sm-max:h-[100%] sm-max:w-[100%]" alt="Travel Experience" />
        </div>
        <div className="travel-experience-offerings-right flex flex-col justify-between w-fit gap-[30px] sm-max:gap-[10px]">
          <img src="https://img.freepik.com/free-photo/close-up-clock-with-time-change_23-2149241173.jpg?uid=P77132068&ga=GA1.1.1678051510.1721624355&semt=ais_user-customized" className="offering-img right rounded-lg h-[260px] w-[465px] sm-max:h-auto sm-max:w-[100%]" alt="Clock" data-aos="fade-left" data-aos-delay="400" />
          <img src="https://img.freepik.com/premium-photo/businessman-hand-price-down-cost-reduction-concept-cost-down-puppet-master-hand-controlling-stock-market_106035-2803.jpg?uid=P77132068&ga=GA1.1.1678051510.1721624355" className="offering-img right rounded-lg h-[260px] w-[465px] sm-max:h-auto sm-max:w-[100%]" alt="Cost Reduction" data-aos="-left" data-aos-delay="400" />
        </div>
      </div>
    </div>
  );
};

export default TravelExperience;
