import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TravelExperience = () => {
  useEffect(() => {
<<<<<<< HEAD
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="elevate-travel-experiences-section box-border overflow-hidden flex flex-col justify-center items-center h-fit w-screen py-16 bg-[#dc635b] sm:py-10">
      <h2 className="section-header pb-5 text-4xl font-bold text-black text-center sm:pb-2 sm:text-2xl" data-aos="fade-up">
=======
    AOS.init({ duration: 2500, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="elevate-travel-experiences-section box-border overflow-hidden flex flex-col justify-center items-center h-fit w-screen py-[60px] pb-[70px] bg-gray-300">
      <h2 className="section-header pb-[20px] text-[42px] font-bold text-black text-center sm-max:pb-[10px] sm-max:text-[22px]" data-aos="fade-up" data-aos-delay="200">
>>>>>>> 5579824757fdf13e003e574a58366a003901986b
        Elevate Your Travel Experience
      </h2>
      <p className="w-[500px] text-lg leading-8 text-center text-white sm:w-full sm:text-base sm:leading-normal sm:px-4" data-aos="fade-up" data-aos-delay="200">
        Unmatched Professionalism. Impeccable Service. <br className="hidden sm:block" /> Your Perfect Chauffeur-Driven Experience
      </p>
<<<<<<< HEAD
      <div className="travel-experience-offerings w-screen mt-10 flex justify-center items-center gap-9 sm:flex-col sm:gap-2 sm:mt-6">
        <div className="travel-experience-offerings-left h-[550px] w-full sm:h-auto">
          <img src="/top_ph002.png" className="offering-img object-cover rounded-lg h-full w-full sm:w-full sm:h-auto" alt="Travel Experience" data-aos="fade-right" data-aos-delay="100" />
=======
      <div className="travel-experience-offerings w-screen mt-[40px] flex justify-center items-center gap-[35px] sm-max:flex-col sm-max:p-[10px] sm-max:gap-[10px]">
        <div className="travel-experience-offerings-left h-[550px] w-[500px] sm-max:w-[100%] sm-max:h-fit" >
          <img src={travelexperience} className="offering-img left object-cover rounded-lg h-[100%] sm-max:h-[100%] sm-max:w-[100%]" alt="Travel Experience" />
        </div>
        <div className="travel-experience-offerings-right flex flex-col justify-between w-fit gap-[30px] sm-max:gap-[10px]">
          <img src="https://img.freepik.com/free-photo/close-up-clock-with-time-change_23-2149241173.jpg?uid=P77132068&ga=GA1.1.1678051510.1721624355&semt=ais_user-customized" className="offering-img right rounded-lg h-[260px] w-[465px] sm-max:h-auto sm-max:w-[100%]" alt="Clock" data-aos="fade-left" data-aos-delay="400" />
          <img src="https://img.freepik.com/premium-photo/businessman-hand-price-down-cost-reduction-concept-cost-down-puppet-master-hand-controlling-stock-market_106035-2803.jpg?uid=P77132068&ga=GA1.1.1678051510.1721624355" className="offering-img right rounded-lg h-[260px] w-[465px] sm-max:h-auto sm-max:w-[100%]" alt="Cost Reduction" data-aos="fade-left" data-aos-delay="600" />
>>>>>>> 5579824757fdf13e003e574a58366a003901986b
        </div>
        {/* Uncomment and update the following section if you need additional images */}
        {/* <div className="travel-experience-offerings-right flex flex-col justify-between w-fit gap-7 sm:gap-2">
          <img src="IMAGE_URL_1" className="offering-img rounded-lg h-[260px] w-[465px] sm:h-auto sm:w-full" alt="Description 1" data-aos="fade-left" data-aos-delay="100" />
          <img src="IMAGE_URL_2" className="offering-img rounded-lg h-[260px] w-[465px] sm:h-auto sm:w-full" alt="Description 2" data-aos="fade-left" data-aos-delay="200" />
        </div> */}
      </div>
    </div>
  );
};

export default TravelExperience;
