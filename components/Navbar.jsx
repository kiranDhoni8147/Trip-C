import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="carzonrent-navbar">
            <div className="left-logo">
                <img src="" alt="" />
            </div>
            <div className="nav-interact">
                <div className="nav-hrefs-wrapper">
                    <div className="nav-hrefs" style={{ color: '#fc0' }}>
                        <img src="https://www.carzonrent.com/webcor/images/icons/discount-icon.svg" alt="Discount Icon" />
                        Travel Packages
                    </div>
                    <div className="nav-hrefs">
                        Business Solutions
                        <div className="biz-sol-modal">
                            <ul className="biz-sol-list">
                                <li className="biz-sol-list-item"><Link to="/corporatetravels">Corporate Travels</Link></li>
                                <li className="biz-sol-list-item"><Link to="/smetravels">SME Travels</Link></li>
                                <li className="biz-sol-list-item"><Link to="/aviationtravelsolutions">Aviation Travel Solutions</Link></li>
                                <li className="biz-sol-list-item"><Link to="/govpsutravel">Gov & PSU's Travel</Link></li>
                                <li className="biz-sol-list-item"><Link to="/hospitalitytravel">Hospitality Travel</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-hrefs">
                        Services
                        <div className="services-modal">
                            <div className="services-for-biz">
                                <h2>
                                    <img src="https://www.carzonrent.com/webcor/images/icons/forbusiness.svg" alt="For Business Icon" />
                                    For Business
                                </h2>
                                <ul className="service-for-biz-list">
                                    <li className="service-for-biz-list-item">ETS</li>
                                    <li className="service-for-biz-list-item">Plugs</li>
                                    <li className="service-for-biz-list-item">Events</li>
                                    <li className="service-for-biz-list-item">Expats</li>
                                    <li className="service-for-biz-list-item">Long Term Rentals</li>
                                </ul>
                            </div>
                            <div className="services-for-individual">
                                <h2>
                                    <img src="https://www.carzonrent.com/webcor/images/icons/forindividuals.svg" alt="For Individuals Icon" />
                                    For Individuals
                                </h2>
                                <ul className="service-for-individual-list">
                                    <li className="service-for-individual-list-item">Airport Transfers</li>
                                    <li className="service-for-individual-list-item">Long Term Rentals</li>
                                    <li className="service-for-individual-list-item">Outstation Travel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nav-hrefs">Blog</div>
                    <div className="nav-hrefs"><Link to="/aboutus">About Us</Link></div>
                    <div className="nav-hrefs"><Link to="/contactus">Contact Us</Link></div>
                </div>
                <div className="login-signup-btn">
                    <i className="fa-solid fa-user"></i>
                    Login/SignUp
                </div>
            </div>
        </div>
    );
};

export default Navbar;