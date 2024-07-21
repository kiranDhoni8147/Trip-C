import { useEffect } from 'react';
import React from 'react';
import TravelSolutions from '../components/TravelSolutions';
import TravelExperience from '../components/TravelExperience';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import OurServices from '../components/OurServices';
import CompanyStats from '../components/CompanyStats';
import SelfDrive from '../components/SelfDrive';
import WhyChooseUs from '../components/WhyChooseUs';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import './App.css'; 

function App() {


    return (
        <>
            <Navbar />


            <HeroSection />


            <TravelExperience />


            <TravelSolutions />


            <OurServices />


            <CompanyStats />


            <SelfDrive />


            {/* about us */}
            <div className="about-us-wrapper h-fit w-screen box-border flex justify-center">
                <div className="about-us w-[80%] sm:w-[95%]">
                    <div className="about-us-header mb-[10px] text-[30px] font-bold text-[#343434] sm:text-[22px] sm:pb-[10px]">About Us</div>
                    <div className="about-us-body mb-[20px] text-[#797979]">
                        Carzonrent is India's leading premium mobility solution provider, covering 79 cities nationwide, founded to revolutionize personal ground transportation. Pioneers of smart mobility, we offer reliable, tech-driven, business class solutions for seamless travel experiences.
                    </div>
                    <button className='read-more-btn px-[25px] py-[10px] border border-yellow-400 rounded-full text-yellow-400 transition-all duration-[0.15s] ease-in-out sm:w-full hover:bg-yellow-400 hover:text-black'>Read More</button>
                </div>
            </div>


            <WhyChooseUs />


            <Faq />


            <Footer />
        </>
    );
}

export default App;
