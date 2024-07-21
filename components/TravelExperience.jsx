import React, { useEffect } from 'react';

const TravelExperience = () => {
  useEffect(() => {
    const skills = document.querySelectorAll('.offering-img');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        setTimeout(() => {
          if (entry.isIntersecting) entry.target.classList.remove('opacity-0','scale-0');
        }, 100 * index);
      });
    }, { threshold: 1 });

    skills.forEach(skill => observer.observe(skill));
  }, []);

  return (
    <div className="elevate-travel-experiences-section flex flex-col justify-center items-center h-fit w-screen py-[60px] pb-[170px] box-border bg-white">
      <h2 className='section-header pb-[20px] text-[42px] font-bold text-center sm:pb-[10px] sm:text-[22px]'>Elevate Your Travel Experience</h2>
      <p className='w-[500px] text-[20px] leading-[30px] text-center text-[#797979] sm:text-[16px] sm:w-full sm:leading-normal'>
        Unmatched Professionalism. Impeccable Service. <br className='sm:hidden' /> Your Perfect Chauffeur-Driven Experience
      </p>
      <div className="travel-experience-offerings w-screen mt-[40px] flex justify-center items-center gap-[35px] sm:flex-col sm:p-[10px] sm:gap-[10px]">
        <div className="travel-experience-offerings-left h-[560px] w-[500px] sm:w-[100%] sm:h-fit">
          <img src="https://www.carzonrent.com/webcor/images/banner/travel_experience_single.webp" className='offering-img left transform scale-0 opacity-0 transition-all duration-200 ease sm:h-auto sm:w-[100%]' alt="" />
        </div>
        <div className="travel-experience-offerings-right flex flex-col justify-between w-fit gap-[30px] sm:gap-[10px]">
          <img src="https://www.carzonrent.com/webcor/images/banner/no-waitingcancelattion.webp" className='offering-img right transform scale-0 opacity-0 transition-all duration-200 ease h-[260px] w-[465px] sm:h-auto sm:w-[100%]' alt="" />
          <img src="https://www.carzonrent.com/webcor/images/banner/nosurgepricingbnr.webp" className='offering-img right transform scale-0 opacity-0 transition-all duration-200 ease h-[260px] w-[465px] sm:h-auto sm:w-[100%]' alt="" />
        </div>
      </div>
    </div>
  );
};

export default TravelExperience;
