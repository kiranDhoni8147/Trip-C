import React, { useEffect } from 'react'
// import './TravelSolutions.css'

const TravelSolutions = () => {

    useEffect(() => {
        const skills = document.querySelectorAll('.travel-solution');

        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                setTimeout(() => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0');
                        entry.target.classList.remove('translate-x-[-100px]', 'sm-max:translate-x-[-50px]');
                        entry.target.classList.remove('translate-x-[100px]', 'sm-max:translate-x-[50px]');
                    }
                }, 100 * index);
            })
        }, { threshold: 0.5 })

        skills.forEach(skill => observer.observe(skill))

    }, []);


    return (
        < div className="premium-travel-solutions flex flex-col justify-center items-center h-fit w-screen box-border bg-white" >
            <h2 className="section-header pb-[20px] text-[42px] text-black font-bold text-center sm-max:pb-[10px] sm-max:text-[22px]">Explore Our Premium Travel Solutions</h2>
            <div className="premium-travel-solutions-wrapper w-3/4 sm-max:w-full">
                <div className="travel-solution flex justify-evenly items-center mb-[80px] sm-max:mb-[40px] sm-max:p-[0_10px] sm-max:flex-wrap transition-all duration-200 ease hidden-sol-left transform translate-x-[-100px] sm-max:translate-x-[-50px] opacity-0">
                    <img src="	https://www.carzonrent.com/webcor/images/banner/corporate-travels.webp" className='travel-solution-img w-[500px] h-[370px] sm-max:w-full sm-max:h-auto sm-max:mb-[10px]' alt="" />
                    <div className="travel-solution-info sm-max:px-2">
                        <span className="travel-sol-info-header text-[28px] font-bold text-[#191f1a] cursor-pointer sm-max:mt-[10px] sm-max:text-[16px]">
                            Corporate Travel
                            <i className="fa-solid fa-arrow-right arrow arrow ml-[20px] transition-all duration-[0.2s] ease-in-out hover:ml-[30px]"></i>
                        </span>
                        <div className="travel-sol-info-body mt-[20px] w-[400px] text-[18px] text-[#797979] leading-[30px] sm-max:mt-[10px] sm-max:w-full sm-max:text-[14px] sm-max:leading-normal sm-max:my-[10px]">
                            Trip-C offers flexible services, allowing corporate travelers to move to a designated area as per their convenience. It ensures reliable transportation for meetings, site visits, and other work-related activities.
                        </div>
                    </div>
                </div>

                <div className="travel-solution flex justify-evenly items-center mb-[80px] sm-max:mb-[40px] sm-max:p-[0_10px] sm-max:flex-wrap transition-all duration-200 ease hidden-sol-right transform translate-x-[100px] sm-max:translate-x-[50px] opacity-0 sm-max:flex-col-reverse">
                    <div className="travel-solution-info">
                        <span className="travel-sol-info-header text-[28px] font-bold text-[#191f1a] cursor-pointer sm-max:mt-[10px] sm-max:text-[16px]">
                            SME Travel
                            <i className="fa-solid fa-arrow-right arrow arrow ml-[20px] transition-all duration-[0.2s] ease-in-out hover:ml-[30px]"></i>
                        </span>
                        <div className="travel-sol-info-body mt-[20px] w-[400px] text-[18px] text-[#797979] leading-[30px] sm-max:mt-[10px] sm-max:w-full sm-max:text-[14px] sm-max:leading-normal sm-max:my-[10px]">
                            Elevate your SME travel experience with Trip-C. Enjoy customized solutions, efficient services, and seamless journeys that cater specifically to the unique travel needs of small and medium-sized enterprises. Transform your business travel operations with Carzonrent to foster growth.
                        </div>
                    </div>
                    <img src="https://www.carzonrent.com/webcor/images/banner/sme.webp" className='travel-solution-img w-[500px] h-[370px] sm-max:w-full sm-max:h-auto sm-max:mb-[10px]' alt="" />
                </div>

                <div className="travel-solution flex justify-evenly items-center mb-[80px] sm-max:mb-[40px] sm-max:p-[0_10px] sm-max:flex-wrap transition-all duration-200 ease hidden-sol-left transform translate-x-[-100px] sm-max:translate-x-[-50px] opacity-0">
                    <img src="	https://www.carzonrent.com/webcor/images/banner/aviationtravels.webp" className='travel-solution-img w-[500px] h-[370px] sm-max:w-full sm-max:h-auto sm-max:mb-[10px]' alt="" />
                    <div className="travel-solution-info">
                        <span className="travel-sol-info-header text-[28px] font-bold text-[#191f1a] cursor-pointer sm-max:mt-[10px] sm-max:text-[16px]">
                            Aviation Travel Solutions
                            <i className="fa-solid fa-arrow-right arrow arrow ml-[20px] transition-all duration-[0.2s] ease-in-out hover:ml-[30px]"></i>
                        </span>
                        <div className="travel-sol-info-body mt-[20px] w-[400px] text-[18px] text-[#797979] leading-[30px] sm-max:mt-[10px] sm-max:w-full sm-max:text-[14px] sm-max:leading-normal sm-max:my-[10px]">
                            Say goodbye to the hassles of parking, navigating traffic, and worrying about missing your flight.Our dedicated team is here to assist you every step of the way, catering to your specific requirements and ensuring that your airport travel experience is nothing short of exceptional.
                        </div>
                    </div>
                </div>

                <div className="travel-solution flex justify-evenly items-center mb-[80px] sm-max:mb-[40px] sm-max:p-[0_10px] sm-max:flex-wrap transition-all duration-200 ease hidden-sol-right transform translate-x-[100px] sm-max:translate-x-[50px] opacity-0 sm-max:flex-col-reverse">
                    <div className="travel-solution-info">
                        <span className="travel-sol-info-header text-[28px] font-bold text-[#191f1a] cursor-pointer sm-max:mt-[10px] sm-max:text-[16px]">
                            Gov & PSU's Travel
                            <i className="fa-solid fa-arrow-right arrow arrow ml-[20px] transition-all duration-[0.2s] ease-in-out hover:ml-[30px]"></i>
                        </span>
                        <div className="travel-sol-info-body mt-[20px] w-[400px] text-[18px] text-[#797979] leading-[30px] sm-max:mt-[10px] sm-max:w-full sm-max:text-[14px] sm-max:leading-normal sm-max:my-[10px]">
                            At Trip-C, we recognize the specific travel needs of Government bodies and Public Sector Units (PSUs). Our specialized solutions ensure streamlined, reliable, and efficient transportation services that comply with government standards and procedures.
                        </div>
                    </div>
                    <img src="	https://www.carzonrent.com/webcor/images/banner/airporttravels.webp" className='travel-solution-img w-[500px] h-[370px] sm-max:w-full sm-max:h-auto sm-max:mb-[10px]' alt="" />
                </div>

                <div className="travel-solution flex justify-evenly items-center mb-[80px] sm-max:mb-[40px] sm-max:p-[0_10px] sm-max:flex-wrap transition-all duration-200 ease hidden-sol-left transform translate-x-[-100px] sm-max:translate-x-[-50px] opacity-0">
                    <img src="	https://www.carzonrent.com/webcor/images/banner/hoteltravels.webp" className='travel-solution-img w-[500px] h-[370px] sm-max:w-full sm-max:h-auto sm-max:mb-[10px]' alt="" />
                    <div className="travel-solution-info">
                        <span className="travel-sol-info-header text-[28px] font-bold text-[#191f1a] cursor-pointer sm-max:mt-[10px] sm-max:text-[16px]">
                            Hospitality Travel
                            <i className="fa-solid fa-arrow-right arrow arrow ml-[20px] transition-all duration-[0.2s] ease-in-out hover:ml-[30px]"></i>
                        </span>
                        <div className="travel-sol-info-body mt-[20px] w-[400px] text-[18px] text-[#797979] leading-[30px] sm-max:mt-[10px] sm-max:w-full sm-max:text-[14px] sm-max:leading-normal sm-max:my-[10px]">
                            Trip-C's Hospitality Travel Solutions provide reliable, dedicated cars for staff & seamless transportation for guests, enhancing their stay with punctual, comfortable rides and transparent billing. Drive customer satisfaction and loyalty with our specialized hotel-centric services.
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TravelSolutions
