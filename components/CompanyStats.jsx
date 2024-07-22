import React from 'react';

const CompanyStats = () => {
    return (
        <div className="relative text-white md:block">
            <img
                src="https://www.carzonrent.com/webcor/images/banner/achievementsbanner.png"
                alt=""
                className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
            <div className="absolute top-[15%] left-[12%] space-y-8 md:space-y-0 md:flex md:flex-col md:gap-6">
                <div className="flex items-center gap-10">
                    <img
                        src="https://www.carzonrent.com/webcor/images/icons/happycustomers.svg"
                        alt=""
                        className="w-12 h-12 md:w-16 md:h-16"
                    />
                    <div>
                        <div className="text-2xl font-bold md:text-3xl">10 Million+</div>
                        <div className="text-lg font-semibold md:text-xl">Happy Customers</div>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <img
                        src="https://www.carzonrent.com/webcor/images/icons/corporateserved.svg"
                        alt=""
                        className="w-12 h-12 md:w-16 md:h-16"
                    />
                    <div>
                        <div className="text-2xl font-bold md:text-3xl">600+</div>
                        <div className="text-lg font-semibold md:text-xl">Corporates Served</div>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <img
                        src="https://www.carzonrent.com/webcor/images/icons/23yrsservice%20excellence.svg"
                        alt=""
                        className="w-12 h-12 md:w-16 md:h-16"
                    />
                    <div>
                        <div className="text-2xl font-bold md:text-3xl">24 Years</div>
                        <div className="text-lg font-semibold md:text-xl">Of Service Excellence</div>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <img
                        src="https://www.carzonrent.com/webcor/images/icons/servicingcities.svg"
                        alt=""
                        className="w-12 h-12 md:w-16 md:h-16"
                    />
                    <div>
                        <div className="text-2xl font-bold md:text-3xl">79+</div>
                        <div className="text-lg font-semibold md:text-xl">Servicing Cities</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyStats;
