import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TravelExperience = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="elevate-travel-experiences-section box-border overflow-hidden flex flex-col justify-center items-center h-fit w-screen py-16 bg-[#dc635b] sm:py-10">
      <h2 className="section-header pb-5 text-4xl font-bold text-black text-center sm:pb-2 sm:text-2xl" data-aos="fade-up">
        Elevate Your Travel Experience
      </h2>
      <p className="w-[500px] text-lg leading-8 text-center text-white sm:w-full sm:text-base sm:leading-normal sm:px-4" data-aos="fade-up" data-aos-delay="200">
        Unmatched Professionalism. Impeccable Service. <br className="hidden sm:block" /> Your Perfect Chauffeur-Driven Experience
      </p>
      <div className="travel-experience-offerings w-screen mt-10 flex justify-center items-center gap-9 sm:flex-col sm:gap-2 sm:mt-6">
        <div className="travel-experience-offerings-left h-[550px] w-full sm:h-auto">
          <img src="/top_ph002.png" className="offering-img object-cover rounded-lg h-full w-full sm:w-full sm:h-auto" alt="Travel Experience" data-aos="fade-right" data-aos-delay="100" />
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
