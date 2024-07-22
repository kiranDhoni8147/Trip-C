import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  helpline, flexiblepaymentoption, nosurgepricing_yellow, transparentbilling, automatedbookingtools, delegatetransfer,
  longtermsrental, plugevcabs, crewtransfer, airlinetravelsbanner
} from '../src/assets';

let AviationTravelSolutions = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <div>
      <div className="w-full min-h-screen" style={{
        backgroundImage: `url(${airlinetravelsbanner})`, backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>

        <main className="flex flex-col items-start justify-center text-white text-left py-10 px-5 sm:py-20 sm:px-10">
          <div className="max-w-4xl mt-10 sm:mt-24 sm:ml-20" data-aos="fade-down" data-aos-delay="400">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">Premier Chauffeur Services <br /> For Airport Travel</h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-12 mt-2 sm:mt-4 font-bold">We Take You Places Since 2000.</p>
          </div>
        </main>

        <div className='sm:ml-10'>
          <hr className="border-yellow-400 border-solid border-t-4 ml-5 sm:ml-20 w-24 mb-6 sm:mb-10" data-aos="fade-down" data-aos-delay="400" />

          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 sm:mb-20 mt-12 sm:mt-24 ml-5 sm:ml-20">

            {/* Statistics Section */}
            <div className="flex flex-col mb-6 sm:mb-0 mr-0 sm:mr-7 text-white" data-aos="fade-up">
              <p className="text-2xl sm:text-3xl font-bold">600+</p>
              <p className="text-lg sm:text-xl font-semibold">Corporates Served</p>
            </div>

            <div className="flex flex-col mb-6 sm:mb-0 mr-0 sm:mr-7 text-white" data-aos="fade-up" data-aos-delay="400">
              <p className="text-2xl sm:text-3xl font-bold">10 Mn+</p>
              <p className="text-lg sm:text-xl font-semibold">Happy Customers</p>
            </div>

            <div className="flex flex-col mb-6 sm:mb-0 mr-0 sm:mr-7 text-white" data-aos="fade-up" data-aos-delay="400">
              <p className="text-2xl sm:text-3xl font-semibold">79+</p>
              <p className="text-lg sm:text-xl">Cities Served</p>
            </div>

            {/* Button Section */}
            <div className="text-end mr-10 sm:ml-0" data-aos="fade-left" data-aos-delay="400">
              <button className="bg-yellow-400 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-lg sm:text-xl">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className=" px-5 sm:px-10 py-10 sm:py-16 bg-slate-100">
        <div className="mx-auto max-w-2xl sm:max-w-7xl">
          <h2 className="text-2xl sm:text-4xl text-center font-bold tracking-tight text-gray-700 mb-4">First-Class Aviation Travel Solution</h2>
          <h3 className="text-lg sm:text-xl text-center tracking-tight text-gray-950 mb-10">Premier Chauffeur Cab Service for Airports</h3>
          {/* 1st Row */}
          <div className="mt-6 h grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-x-16 sm:gap-y-28 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-14">

            {/* Image1 */}
            <div className="group relative" data-aos="zoom-in">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={delegatetransfer} alt="Daily Commute" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex flex-col justify-between">
                <h3 className="text-xl sm:text-2xl text-center text-black font-semibold">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  Delegate Transfer
                </h3>
                <p className="mt-1 text-sm sm:text-base text-gray-500 text-center">Travel stress-free with Carzonrent's chauffeur cab service for smooth delegate transfers.<a href="#" className='text-yellow-400'> Learn More</a></p>
              </div>
            </div>

            {/* Image2 */}
            <div className="group relative" data-aos="zoom-in">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={crewtransfer} alt="ETS" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex flex-col justify-between">
                <h3 className="text-xl sm:text-2xl text-center text-black font-semibold">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Crew Transfer
                </h3>
                <p className="mt-1 text-sm sm:text-base text-gray-500 text-center">Efficient and reliable crew transfers for seamless airline transportation.<a href="#" className='text-yellow-400'> Learn More</a></p>
              </div>
            </div>

            {/* Image3 */}
            <div className="group relative" data-aos="zoom-in">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={longtermsrental} alt="Airport Transfers" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex flex-col justify-between">
                <h3 className="text-xl sm:text-2xl text-center text-black font-semibold">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Passenger Transfer
                </h3>
                <p className="mt-1 text-sm sm:text-base text-gray-500 text-center">Enjoy the convenience of travel with premier chauffeur driven cabs. <a href="#" className='text-yellow-400'> Learn More</a></p>
              </div>
            </div>

          </div>

          {/* 2nd Row */}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-x-16 sm:gap-y-28 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-14">
            {/* Image1 */}
            <div className="group relative" data-aos="zoom-in">
              <div className="aspect-h-1 aspect-w-1 w-full align-middle overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={plugevcabs} alt="Delegate Transfer" className="h-full w-full  object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex flex-col justify-between">
                <h3 className="text-xl sm:text-2xl text-center text-black font-semibold">
                    <span aria-hidden="true" className="absolute inset-0 text-center"></span>
                    Plug- EV Cabs
                </h3>
                <p className="mt-1 text-sm sm:text-base text-gray-500 text-center">Experience noise-free travel with Plug and make a positive impact on the environment.<a href="#" className='text-yellow-400'> Learn More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-5 sm:px-10 py-10 sm:py-16">
        <div className="mx-auto max-w-2xl sm:max-w-7xl">
          <h2 className="text-2xl sm:text-4xl text-center font-bold tracking-tight text-gray-700 mb-4">Key Corporate Features</h2>

          {/* Grid for feature cards */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">

            {/* Feature card 1 */}
            <div className="flex flex-col items-center justify-between p-6 rounded-lg bg-white" data-aos="zoom-in">
              <img
                src={nosurgepricing_yellow}
                alt="No Surge Pricing"
                className="h-24 w-24 object-contain mb-4"
              />
              <h3 className="text-xl sm:text-2xl text-center text-black font-semibold mb-2">No Surge Pricing</h3>
              <p className="text-sm sm:text-base text-gray-500 text-center">
                At Carzonrent, we guarantee no surge pricing for our Corporate Solutions, providing predictable, cost-effective travel options for businesses.
              </p>
            </div>

            {/* Feature card 2 */}
            <div className="flex flex-col items-center justify-between p-6 rounded-lg bg-white" data-aos="zoom-in">
              <img
                src={automatedbookingtools}
                alt="Automated Booking Tools"
                className="h-24 w-24 object-contain mb-4"
              />
              <h3 className="text-xl sm:text-2xl text-center text-black font-semibold mb-2">Automated Booking Tools</h3>
              <p className="text-sm sm:text-base text-gray-500 text-center">
                This functionality streamlines the process and ensures a smooth collaboration between Carzonrent and corporate entities.
              </p>
            </div>

            {/* Feature card 3 */}
            <div className="flex flex-col items-center justify-between p-6 rounded-lg bg-white" data-aos="zoom-in">
              <img
                src={helpline}
                alt="24*7 Helpline"
                className="h-24 w-24 object-contain mb-4"
              />
              <h3 className="text-xl sm:text-2xl text-center text-black font-semibold mb-2">24*7 Helpline</h3>
              <p className="text-sm sm:text-base text-gray-500 text-center">
                Carzonrent ensures customer satisfaction with a dedicated helpline, providing round-the-clock assistance for any queries or concerns.
              </p>
            </div>

          </div>


          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {/* Feature card 1 */}
            <div className="flex flex-col items-center justify-between p-6 rounded-lg bg-white" data-aos="zoom-in">
              <img
                src={flexiblepaymentoption}
                alt="Flexible Payment Options"
                className="h-24 w-24 object-contain mb-4"
              />
              <h3 className="text-xl sm:text-2xl text-center text-black font-semibold mb-2">Flexible Payment Options</h3>
              <p className="text-sm sm:text-base text-gray-500 text-center">
                A simplified billing process where companies can pay monthly instead of per transaction, ensuring ease and efficiency in financial management.
              </p>
            </div>

            {/* Feature card 2 */}
            <div className="flex flex-col items-center justify-between p-6 rounded-lg bg-white" data-aos="zoom-in">
              <img
                src={transparentbilling}
                alt="Transparent Billing"
                className="h-24 w-24 object-contain mb-4"
              />
              <h3 className="text-xl sm:text-2xl text-center text-black font-semibold mb-2  ">Transparent Billing</h3>
              <p className="text-sm sm:text-base text-gray-500 text-center">
                At Carzonrent, we champion transparency with a straightforward, easy-to-understand billing system, leaving no room for hidden charges.
              </p>
            </div>

          </div>

        </div>
      </div>


    </div>
  );
}

export default AviationTravelSolutions;
