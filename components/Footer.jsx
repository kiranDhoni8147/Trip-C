import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between text-center sm:text-left">
                    {/* Quick Links */}
                    <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-gray-600 transition-colors duration-150">Home</a></li>
                            <li><a href="/about-us" className="hover:text-gray-600 transition-colors duration-150">About Us</a></li>
                            <li><a href="/faqs" className="hover:text-gray-600 transition-colors duration-150">FAQ’s</a></li>
                            <li><a href="/blog" className="hover:text-gray-600 transition-colors duration-150">Blog</a></li>
                            <li><a href="/media" className="hover:text-gray-600 transition-colors duration-150">Media Center</a></li>
                            <li><a href="/contact-us" className="hover:text-gray-600 transition-colors duration-150">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Terms & Policies */}
                    <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
                        <h4 className="text-lg font-bold mb-4">Terms & Policies</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/terms-of-use" className="hover:text-gray-600 transition-colors duration-150">Term & Conditions</a></li>
                            <li><a href="/privacy-policy" className="hover:text-gray-600 transition-colors duration-150">Privacy policies</a></li>
                        </ul>
                    </div>

                    {/* Car Rental Cities */}
                    <div className="w-full sm:w-1/3">
                        <h4 className="text-lg font-bold mb-4">Car Rental Cities</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/car-rental-delhi" className="hover:text-gray-600 transition-colors duration-150">Delhi</a></li>
                            <li><a href="/car-rental-bangalore" className="hover:text-gray-600 transition-colors duration-150">Bangalore</a></li>
                            <li><a href="/car-rental-mumbai" className="hover:text-gray-600 transition-colors duration-150">Mumbai</a></li>
                            <li><a href="/car-rental-hyderabad" className="hover:text-gray-600 transition-colors duration-150">Hyderabad</a></li>
                            <li><a href="/car-rental-chennai" className="hover:text-gray-600 transition-colors duration-150">Chennai</a></li>
                            <li><a href="/car-rental-pune" className="hover:text-gray-600 transition-colors duration-150">Pune</a></li>
                            <li><a href="/car-rental-kolkata" className="hover:text-gray-600 transition-colors duration-150">Kolkata</a></li>
                            <li><a href="/car-rental-ahmedabad" className="hover:text-gray-600 transition-colors duration-150">Ahmedabad</a></li>
                            <li><a href="/car-rental-jaipur" className="hover:text-gray-600 transition-colors duration-150">Jaipur</a></li>
                            <li><a href="/car-rental-vishakhapatnam" className="hover:text-gray-600 transition-colors duration-150">Vishakhapatnam</a></li>
                            <li><a href="/car-rental-noida" className="hover:text-gray-600 transition-colors duration-150">Noida</a></li>
                            <li><a href="/car-rental-gurgaon" className="hover:text-gray-600 transition-colors duration-150">Gurgaon</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col sm:flex-row justify-between items-center">
                    <div className="footer-logo mb-4 sm:mb-0">
                        <img src="https://www.carzonrent.com/webcor/images/icons/Carzonrent.svg" alt="Carzonrent logo" className="h-8" />
                    </div>
                    <div className="social-media flex space-x-4 mb-4 sm:mb-0">
                        <a href="https://www.facebook.com/carzonrent" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors duration-150">
                            <img src="https://www.carzonrent.com/webcor/images/icons/facebook_icon.svg" className="h-6" alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/carzonrentin/?hl=hi" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors duration-150">
                            <img src="https://www.carzonrent.com/webcor/images/icons/instagram.svg" className="h-6" alt="Instagram" />
                        </a>
                        <a href="https://twitter.com/CarzonrentIN" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors duration-150">
                            <img src="https://www.carzonrent.com/webcor/images/icons/twitter.svg" className="h-6" alt="Twitter" />
                        </a>
                        <a href="https://www.linkedin.com/company/carzonrent-india-pvt-ltd" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors duration-150">
                            <img src="https://www.carzonrent.com/webcor/images/icons/linkedin.svg" className="h-6" alt="LinkedIn" />
                        </a>
                    </div>
                    <div className="contact-info">
                        <a href="tel:011-4184 1212" className="flex items-center hover:text-gray-600 transition-colors duration-150">
                            <img src="https://www.carzonrent.com/webcor/images/icons/mobile phone solid.svg" className="h-5 mr-2" alt="Phone Icon" />
                            43083000
                        </a>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Carzonrent. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
