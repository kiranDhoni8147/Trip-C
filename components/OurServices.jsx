import React from 'react'
// import './OurServices.css'
import { airlinetravelsbanner, corporateevents, crewtransfer, dailycommute, ets, longtermsrental, plugevcabs, staffcars } from '../src/assets'

const OurServices = () => {
    return (
        <div className='our-services-section overflow-hidden flex flex-col items-center h-fit w-screen box-border py-[56px] pb-[100px]'>
            <h2 className="section-header pb-[20px] text-[42px] font-bold text-center sm-max:pb-[10px] sm-max:text-[22px]" style={{ color: '#384863' }}>Our Services</h2>

            <div className="business services-section mb-[100px] w-[82%] sm-max:w-[95%]">
                <div className="sub-section-header mb-[45px] flex justify-between items-center text-[#343434] text-[30px] font-[700] sm-max:mb-[25px] sm-max:text-[18px]">
                    For Businesses
                    {/* <span className='view-more text-[#7e7e7e] text-[20px] font-[600] cursor-pointer transition-all duration-[0.1s] ease-in-out hover:text-[var(--theme-yellow)] sm-max:text-[14px]'>View More &gt;</span> */}
                </div>
                <div className="category-card-wrapper overflow-hidden flex justify-evenly sm-max:flex-wrap sm-max:gap-[30px]">
                    <div className="category-card w-[360px] h-fit sm-max:w-full" data-aos='fade-left' data-aos-delay='100'>
                        <img className='h-[160px] w-[360px] rounded-2xl mb-[25px] sm-max:mb-[2px] sm-max:w-full sm-max:h-auto' src={airlinetravelsbanner} alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[20px] font-[700]">Employee Transportation</div>
                            <div className="category-card-body text-[14px] font-[600] text-[#797979]">
                                Convenient and comfortable journeys for all your employees, from commutes to business trips.
                            </div>
                            {/* <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a> */}
                        </div>
                    </div>
                    
                    <div className="category-card w-[360px] h-fit sm-max:w-full" data-aos='fade-left' data-aos-delay='300'>
                        <img className='h-[160px] w-[360px] rounded-2xl mb-[25px] sm-max:mb-[2px] sm-max:w-full sm-max:h-auto' src={plugevcabs} alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[20px] font-[700]">Plug-EV</div>
                            <div className="category-card-body text-[14px] font-[600] text-[#797979]">
                            Embrace Eco-friendly mobility with our electric cabs, paving the path to a greener tomorrow.
                            </div>
                            {/* <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a> */}
                        </div>
                    </div>
                    
                    <div className="category-card w-[360px] h-fit sm-max:w-full" data-aos='fade-left' data-aos-delay='500'>
                        <img className='h-[160px] w-[360px] rounded-2xl mb-[25px] sm-max:mb-[2px] sm-max:w-full sm-max:h-auto' src={corporateevents} alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[20px] font-[700]">Events</div>
                            <div className="category-card-body text-[14px] font-[600] text-[#797979]">
                            Seamless corporate event transportation with reliable cabs, experienced drivers, and efficient planning.
                            </div>
                            {/* <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a> */}
                        </div>
                    </div>
                </div>
            </div>




            <div className="individuals services-section w-[82%] sm-max:w-[95%]">
                <div className="sub-section-header mb-[45px] flex justify-between items-center text-[#343434] text-[30px] font-[700] sm-max:mb-[25px] sm-max:text-[18px]">
                    For Individuals
                    {/* <span className='view-more text-[#7e7e7e] text-[20px] font-[600] cursor-pointer transition-all duration-[0.1s] ease-in-out hover:text-[var(--theme-yellow)] sm-max:text-[14px]'>View More &gt;</span> */}
                </div>
                <div className="category-card-wrapper overflow-hidden flex justify-evenly sm-max:flex-wrap sm-max:gap-[30px]" data-aos='fade-left' data-aos-delay='100'>
                    <div className="category-card w-[360px] h-fit sm-max:w-full">
                        <img className='h-[160px] w-[360px] rounded-2xl object-cover mb-[25px] sm-max:mb-[2px] sm-max:w-full sm-max:h-auto' src={ets} alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[20px] font-[700]">Intercity Rides</div>
                            <div className="category-card-body text-[14px] font-[600] text-[#797979]">
                            Enjoy comfortable and convenient transportation between cities, tailored to your specific needs.
                            </div>
                            {/* <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a> */}
                        </div>
                    </div>
                    
                    <div className="category-card w-[360px] h-fit sm-max:w-full" data-aos='fade-left' data-aos-delay='300'>
                        <img className='h-[160px] w-[360px] rounded-2xl mb-[25px] sm-max:mb-[2px] sm-max:w-full sm-max:h-auto' src={longtermsrental} alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[20px] font-[700]">Long Term Rentals</div>
                            <div className="category-card-body text-[14px] font-[600] text-[#797979]">
                            Enjoy extended rentals customized for your long-term convenience and freedom.
                            </div>
                            {/* <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a> */}
                        </div>
                    </div>
                    
                    <div className="category-card w-[360px] h-fit sm-max:w-full" data-aos='fade-left' data-aos-delay='500'>
                        <img className='h-[160px] object-cover w-[360px] rounded-2xl mb-[25px] sm-max:mb-[2px] sm-max:w-full sm-max:h-auto' src={dailycommute} alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[20px] font-[700]">Airport Transfers</div>
                            <div className="category-card-body text-[14px] font-[600] text-[#797979]">
                            Enjoy smooth & convenient transportation to and from the airport, ensuring a stress-free travel experience.
                            </div>
                            {/* <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices;