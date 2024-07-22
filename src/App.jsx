import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CorporateTravels from '../components/CorporateTravels';
import SMETravels from '../components/SMETravels';
import GovPSUTravel from '../components/Gov&PSUTravel';
import HospitalityTravel from '../components/HospitalityTravel';
import AviationTravelSolutions from '../components/AviationTravelSolutions';
import HeroSection from '../components/HeroSection';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import './App.css';
import AboutUs from '../components/AboutUs';
import Contactus from '../components/ContactUs'

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<HeroSection/>}/>
                    <Route path='/corporatetravels' element={<CorporateTravels />} />
                    <Route path='/smetravels' element={<SMETravels />} />
                    <Route path='/aviationtravelsolutions' element={<AviationTravelSolutions />} />
                    <Route path='/govpsutravel' element={<GovPSUTravel />} />
                    <Route path='/hospitalitytravel' element={<HospitalityTravel />} />
                    <Route path='/aboutus' element={<AboutUs/>}></Route>
                    <Route path='/contactus' element={<Contactus/>}></Route>
                </Routes>
                

                <div className="about-us-wrapper h-fit w-screen box-border flex justify-center">
                    <div className="about-us w-[80%] sm:w-[95%]">
                        <div className="about-us-header mb-[10px] text-[30px] font-bold text-[#343434] sm:text-[22px] sm:pb-[10px]">About Us</div>
                        <div className="about-us-body mb-[20px] text-[#797979]">
                            Carzonrent is India's leading premium mobility solution provider, covering 79 cities nationwide, founded to revolutionize personal ground transportation. Pioneers of smart mobility, we offer reliable, tech-driven, business class solutions for seamless travel experiences.
                        </div>
                        <button className='read-more-btn px-[25px] py-[10px] border border-yellow-400 rounded-full text-yellow-400 transition-all duration-[0.15s] ease-in-out sm:w-full hover:bg-yellow-400 hover:text-black'>Read More</button>
                    </div>
                </div>

                
                <Faq />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
