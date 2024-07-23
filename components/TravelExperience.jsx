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
      <h2 className='section-header pb-[20px] text-[42px] font-bold text-black text-center sm-max:pb-[10px] sm-max:text-[22px]'>Elevate Your Travel Experience</h2>
      <p className='w-[500px] text-[20px] leading-[30px] text-center text-[#797979] sm-max:text-[16px] sm-max:w-full sm-max:leading-normal'>
        Unmatched Professionalism. Impeccable Service. <br className='sm-max:hidden' /> Your Perfect Chauffeur-Driven Experience
      </p>
      <div className="travel-experience-offerings w-screen mt-[40px] flex justify-center items-center gap-[35px] sm-max:flex-col sm-max:p-[10px] sm-max:gap-[10px]">
        <div className="travel-experience-offerings-left h-[560px] w-[500px] sm-max:w-[100%] sm-max:h-fit">
          <img src="https://img.freepik.com/premium-photo/attractive-business-woman-working-her-laptop-back-sit-car-way-meeting-side-view-beautiful-confident-woman-coat-working-laptop-while-sitting-car_168991-823.jpg?uid=P77132068&ga=GA1.1.1678051510.1721624355&semt=ais_user-customized" className='offering-img left transform scale-0 opacity-0 transition-all duration-200 ease sm-max:h-auto sm-max:w-[100%]' alt="" />
        </div>
        <div className="travel-experience-offerings-right flex flex-col justify-between w-fit gap-[30px] sm-max:gap-[10px]">
          <img src="https://img.freepik.com/free-photo/close-up-clock-with-time-change_23-2149241173.jpg?uid=P77132068&ga=GA1.1.1678051510.1721624355&semt=ais_user-customized" className='offering-img right transform scale-0 opacity-0 transition-all duration-200 ease h-[260px] w-[465px] sm-max:h-auto sm-max:w-[100%]' alt="" />
          <img src="https://img.freepik.com/premium-photo/businessman-hand-price-down-cost-reduction-concept-cost-down-puppet-master-hand-controlling-stock-market_106035-2803.jpg?uid=P77132068&ga=GA1.1.1678051510.1721624355" className='offering-img right transform scale-0 opacity-0 transition-all duration-200 ease h-[260px] w-[465px] sm-max:h-auto sm-max:w-[100%]' alt="" />
        </div>
      </div>
    </div>
  );
};

export default TravelExperience;
