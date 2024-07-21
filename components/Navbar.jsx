import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="carzonrent-navbar">
            <div className="left-logo">
                <img src="https://www.carzonrent.com/webcor/images/img/cor_logo.svg?v=2028" alt="" />
            </div>

            <div className="nav-interact">
                <div className="nav-hrefs-wrapper">
                    <div className="nav-hrefs" style={{ color: '#fc0' }}>
                        <img src="https://www.carzonrent.com/webcor/images/icons/discount-icon.svg" alt="" />
                        Travel Packages
                    </div>
                    <div className="nav-hrefs">
                        Business Solutions
                        <div className="biz-sol-modal">
                            <ul className="biz-sol-list">
                                <li className="biz-sol-list-item">Corporate Travels</li>
                                <li className="biz-sol-list-item">SME Travels</li>
                                <li className="biz-sol-list-item">Aviation Travel Solutions</li>
                                <li className="biz-sol-list-item">Gov & PSU's Travel</li>
                                <li className="biz-sol-list-item">Hospitality Travel</li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-hrefs">
                        Services
                        <div className="services-modal">
                            <div className="services-for-biz">
                                <h2>
                                    <img src="https://www.carzonrent.com/webcor/images/icons/forbusiness.svg" alt="" />
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
                                    <img src="https://www.carzonrent.com/webcor/images/icons/forindividuals.svg" alt="" />
                                    For Individuals
                                </h2>
                                <ul className="service-for-individual-list">
                                    <li className="service-for-individual-list-item">Airoprt Transfers</li>
                                    <li className="service-for-individual-list-item">Long Term Rentals</li>
                                    <li className="service-for-individual-list-item">Outstation Travel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nav-hrefs">Blog</div>
                    <div className="nav-hrefs">About Us</div>
                    <div className="nav-hrefs">Contact US</div>
                </div>
                <div className="login-signup-btn">
                    <i className="fa-solid fa-user"></i>
                    Login/SignUp
                </div>
            </div>
        </div>
    )
}

export default Navbar
