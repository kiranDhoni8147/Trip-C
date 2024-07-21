import React from 'react'
// import './OurServices.css'

const OurServices = () => {
    return (
        <div className='our-services-section flex flex-col items-center h-fit w-screen box-border py-[56px] pb-[100px]'>
            <h2 className="section-header pb-[20px] text-[42px] font-bold text-center sm:pb-[10px] sm:text-[22px]" style={{ color: '#384863' }}>Our Services</h2>

            <div className="business services-section mb-[100px] w-[82%] sm:w-[95%]">
                <div className="sub-section-header mb-[45px] flex justify-between items-center text-[#343434] text-[30px] font-[700] sm:mb-[25px] sm:text-[18px]">
                    For Businesses
                    <span className='view-more text-[#7e7e7e] text-[20px] font-[600] cursor-pointer transition-all duration-[0.1s] ease-in-out hover:text-[var(--theme-yellow)] sm:text-[14px]'>View More &gt;</span>
                </div>
                <div className="category-card-wrapper flex justify-evenly sm:flex-wrap sm:gap-[30px]">
                    <div className="category-card w-[360px] h-fit sm:w-full">
                        <img className='h-[160px] w-[360px] mb-[25px] sm:mb-[2px] sm:w-full sm:h-auto' src="https://www.carzonrent.com/webcor/images/banner/etsservices.png" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[20px] font-[700]">Employee Transportation</div>
                            <div className="category-card-body text-[14px] font-[600] text-[#797979]">
                                Convenient and comfortable journeys for all your employees, from commutes to business trips.
                            </div>
                            <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a>
                        </div>
                    </div>
                    
                    <div className="category-card w-[360px] h-fit sm:w-full">
                        <img className='h-[160px] w-[360px] mb-[25px] sm:mb-[2px] sm:w-full sm:h-auto' src="https://www.carzonrent.com/webcor/images/banner/pluevvehicle.png" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[20px] font-[700]">Plug-EV</div>
                            <div className="category-card-body text-[14px] font-[600] text-[#797979]">
                            Embrace Eco-friendly mobility with our electric cabs, paving the path to a greener tomorrow.
                            </div>
                            <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a>
                        </div>
                    </div>
                    
                    <div className="category-card w-[360px] h-fit sm:w-full">
                        <img className='h-[160px] w-[360px] mb-[25px] sm:mb-[2px] sm:w-full sm:h-auto' src="https://www.carzonrent.com/webcor/images/banner/eventsservice.png" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[20px] font-[700]">Events</div>
                            <div className="category-card-body text-[14px] font-[600] text-[#797979]">
                            Seamless corporate event transportation with reliable cabs, experienced drivers, and efficient planning.
                            </div>
                            <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>




            <div className="individuals services-section w-[82%] sm:w-[95%]">
                <div className="sub-section-header mb-[45px] flex justify-between items-center text-[#343434] text-[30px] font-[700] sm:mb-[25px] sm:text-[18px]">
                    For Individuals
                    <span className='view-more text-[#7e7e7e] text-[20px] font-[600] cursor-pointer transition-all duration-[0.1s] ease-in-out hover:text-[var(--theme-yellow)] sm:text-[14px]'>View More &gt;</span>
                </div>
                <div className="category-card-wrapper flex justify-evenly sm:flex-wrap sm:gap-[30px]">
                    <div className="category-card w-[360px] h-fit sm:w-full">
                        <img className='h-[160px] w-[360px] mb-[25px] sm:mb-[2px] sm:w-full sm:h-auto' src="https://www.carzonrent.com/webcor/images/banner/city-to-city-ride.png" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[20px] font-[700]">Intercity Rides</div>
                            <div className="category-card-body text-[14px] font-[600] text-[#797979]">
                            Enjoy comfortable and convenient transportation between cities, tailored to your specific needs.
                            </div>
                            <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a>
                        </div>
                    </div>
                    
                    <div className="category-card w-[360px] h-fit sm:w-full">
                        <img className='h-[160px] w-[360px] mb-[25px] sm:mb-[2px] sm:w-full sm:h-auto' src="https://www.carzonrent.com/webcor/images/banner/pluevvehicle.png" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[20px] font-[700]">Long Term Rentals</div>
                            <div className="category-card-body text-[14px] font-[600] text-[#797979]">
                            Enjoy extended rentals customized for your long-term convenience and freedom.
                            </div>
                            <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a>
                        </div>
                    </div>
                    
                    <div className="category-card w-[360px] h-fit sm:w-full">
                        <img className='h-[160px] w-[360px] mb-[25px] sm:mb-[2px] sm:w-full sm:h-auto' src="https://www.carzonrent.com/webcor/images/banner/eventsservice.png" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[20px] font-[700]">Airport Transfers</div>
                            <div className="category-card-body text-[14px] font-[600] text-[#797979]">
                            Enjoy smooth & convenient transportation to and from the airport, ensuring a stress-free travel experience.
                            </div>
                            <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices
