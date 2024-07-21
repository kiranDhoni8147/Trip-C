import React, { useState } from 'react'
import FindYourRide from './FindYourRide';
// import './HeroSection.css'

const HeroSection = () => {


    return (
        <div className="hero-section flex flex-col justify-center items-center mt-[80px] h-fit w-screen py-[30px] pb-[40px] box-border text-white bg-black">
            <div className="hero-section-stats-wrapper flex justify-between mb-[55px] h-fit w-[80%] sm:flex-wrap sm:justify-evenly sm:w-full sm:mb-[30px]">
                <div className="hero-section-stat border-r border-[#797979] sm:border-none flex-grow sm:border-none sm:flex-grow-0 s-one">
                    <div className="stat-header text-[30px] font-bold text-center text-[var(--theme-yellow)] sm:text-[18px]">24 Years</div>
                    <div className="stat-sub-header text-[18px] font-bold text-center sm:text-[14px]">Of Service Excellence</div>
                </div>

                <div className="hero-section-stat border-r border-[#797979] sm:border-none flex-grow sm:border-none sm:flex-grow-0 s-two">
                    <div className="stat-header text-[30px] font-bold text-center text-[var(--theme-yellow)] sm:text-[18px]">10 Million+</div>
                    <div className="stat-sub-header text-[18px] font-bold text-center sm:text-[14px]">Happy Customers</div>
                </div>

                <div className="hero-section-stat border-r border-[#797979] sm:border-none flex-grow sm:border-none sm:flex-grow-0 s-three">
                    <div className="stat-header text-[30px] font-bold text-center text-[var(--theme-yellow)] sm:text-[18px]">600+</div>
                    <div className="stat-sub-header text-[18px] font-bold text-center sm:text-[14px]">Corporates Served</div>
                </div>

                <div className="hero-section-stat flex-grow sm:border-none sm:flex-grow-0 s-four">
                    <div className="stat-header text-[30px] font-bold text-center text-[var(--theme-yellow)] sm:text-[18px]">79+</div>
                    <div className="stat-sub-header text-[18px] font-bold text-center sm:text-[14px]">Servicing Cities</div>
                </div>
            </div>


            <FindYourRide />
            
        </div>
    )
}


export default HeroSection
