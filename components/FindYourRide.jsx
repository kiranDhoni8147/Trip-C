import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './FindYourRide.css'

const FindYourRide = () => {

    const [selectedOption, setSelectedOption] = useState('Outstation Travel');


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="find-ride-section relative flex flex-col items-center h-[280px] w-[90%] p-6 md:p-10 rounded-3xl text-black bg-white sm:p-[15px_15px_40px] sm:h-fit">
            <div className="ride-categories mb-2 w-full h-fit flex flex-wrap items-center gap-10 sm:gap-2 sm:justify-center font-quicksand flex-[0_0_25%]">
                <div className="ride-category flex items-center cursor-pointer sm:grow sm:bg-[#e7e7e7] sm:w-2/5 sm:p-[5px_6px] rounded-lg sm:text-black-900"> 
                    <input
                        type="radio"
                        className="ride-category-input h-7 fill-yellow text-yellow bg-yellow "
                        name="ride-category"
                        id="option-Local"
                        value="Local"
                        checked={selectedOption === 'Local'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="option-Local" className="label pl-2.5 text-[#797979] font-semibold cursor-pointer sm:pl-1 sm:text-[11px]">Local</label>
                </div>
                <div className="ride-category flex items-center cursor-pointer sm:grow sm:bg-[#e7e7e7] sm:w-2/5 sm:p-[5px_6px] rounded-lg sm:text-black-900"> 
                    <input
                        type="radio"
                        className="ride-category-input h-7 fill-yellow text-yellow bg-yellow"
                        name="ride-category"
                        id="option-Outstation Travel"
                        value="Outstation Travel"
                        checked={selectedOption === 'Outstation Travel'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="option-Outstation Travel" className="label pl-2.5 text-[#797979] font-semibold cursor-pointer sm:pl-1 sm:text-[11px]">Outstation Travel</label>
                </div>
                <div className="ride-category flex items-center cursor-pointer sm:grow sm:bg-[#e7e7e7] sm:w-2/5 sm:p-[5px_6px] rounded-lg sm:text-black-900"> 
                    <input
                        type="radio"
                        className="ride-category-input h-7 fill-yellow text-yellow bg-yellow"
                        name="ride-category"
                        id="option-Airport Transfer"
                        value="Airport Transfer"
                        checked={selectedOption === 'Airport Transfer'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="option-Airport Transfer" className="label pl-2.5 text-[#797979] font-semibold cursor-pointer sm:pl-1 sm:text-[11px]">Airport Transfer</label>
                </div>
                <div className="ride-category flex items-center cursor-pointer sm:grow sm:bg-[#e7e7e7] sm:w-2/5 sm:p-[5px_6px] rounded-lg sm:text-black-900"> 
                    <input
                        type="radio"
                        className="ride-category-input h-7 fill-yellow text-yellow bg-yellow"
                        name="ride-category"
                        id="option-Long Term Rentals"
                        value="Long Term Rentals"
                        checked={selectedOption === 'Long Term Rentals'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="option-Long Term Rentals" className="label pl-2.5 text-[#797979] font-semibold cursor-pointer sm:pl-1 sm:text-[11px]">Long Term Rentals</label>
                </div>
            </div>

            {selectedOption === 'Local' && <LocalRideSelect />}

            {selectedOption === 'Outstation Travel' && <OutStationTravel />}

            {selectedOption === 'Airport Transfer' && <AirportTranfer />}

            {selectedOption === 'Long Term Rentals' && <LongTermRentals />}

            <a href="/outstation" className='offer my-4 flex gap-2 sm:hidden'>
                <img src="https://www.carzonrent.com/webcor/images/icons/percent-discount.svg" alt="" />
                Explore the all-new Customized Holiday Packages from Carzonrent - Avail 
                <span className="bg-yellow-500 items-center px-1"> 15% OFF </span> 
                on your next Outstation Booking.
            </a>

            <button className='find-ride-btn rounded-lg absolute bottom-[-26px] flex justify-center items-center h-12 w-56 text-lg font-bold text-black gap-2 rounded bg-yellow-400'>
                <img src="	https://www.carzonrent.com/webcor/images/icons/searchiconblack.svg" alt="" />
                Find Your Ride
            </button>
        </div>
    )
}

export default FindYourRide;










const LocalRideSelect = () => {

    const cities = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune", "Lucknow"];
    const timestamps = ["05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30"];
    const durations = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const [carTypes, setCarTypes] = useState([
        {
            type: 'Budget',
            car: 'Swift Dezire',
            capacity: '4+ Seater'
        },
        {
            type: 'Premium',
            car: 'Crysta',
            capacity: '6+ Seater'
        },
        {
            type: 'Family',
            car: 'Ertiga',
            capacity: '6+ Seater'
        },
    ]);

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedType, setSelectedType] = useState('');

    // Function to handle select change
    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    // Find selected car type details
    const selectedCarType = carTypes.find((cartype) => cartype.type === selectedType);

    return (
        <div className="ride-selection  flex flex-wrap justify-center items-center w-full h-[130px] rounded-lg shadow-md text-black bg-white sm:shadow-none sm:h-[fit-content] sm:gap-2">
            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-one">
                <div className="city selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/maplocation.svg" alt="" />
                    City
                </div>
                <select className='bg-white city-select text-2xl font-bold sm:text-[16px]' name="city" id="">
                    {cities.map((city, index) => (
                        <option className='city-options' value={city} key={index}>{city}</option>
                    ))}
                </select>
            </div>

            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-two">
                <div className="datepicker selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" alt="" />
                    Pickup Date
                </div>
                <DatePicker
                    className='date-picker text-2xl font-bold sm:text-[16px] w-32'
                    selected={selectedDate}
                    dateFormat='dd MMM, yy'
                    onChange={date => setSelectedDate(date)}
                />
            </div>

            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-three">
                <div className="time selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/clocktime.svg" alt="" />
                    Pickup Time
                </div>
                <select className='bg-white time-select text-2xl font-bold sm:text-[16px]' name="time" id="">
                    {timestamps.map((time, index) => (
                        <option className='time-options text-base font-bold' value={time} key={index}>{time}</option>
                    ))}
                </select>
            </div>
            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-four">
                <div className="duration selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/packageicon.svg" alt="" />
                    Package
                </div>
                <select className='bg-white duration-select  text-2xl font-bold sm:text-[16px]' name="duration" id="">
                    {durations.map((duration, index) => (
                        <option className='duration-options text-base font-bold' value={duration} key={index}>{duration} Hours</option>
                    ))}
                </select>
            </div>

            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-five">
                <div className="cartype selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/cartypegredient.svg" alt="" />
                    Car Type
                </div>
                <select className='bg-white cartype-select text-2xl font-bold sm:text-[16px]' name="cartype" onChange={handleSelectChange} value={selectedType}>
                    <option value="">Select Type</option>
                    {carTypes.map((cartype, index) => (
                        <option className='cartype-options text-base font-bold' value={cartype.type} key={index}>
                            {cartype.type}
                        </option>
                    ))}
                </select>
                {selectedCarType && (
                    <div className='detail-sub-info flex justify-between items-center'>
                        <span className='car-info text-xs font-semibold text-gray-600 mt-2'>{selectedCarType.car}</span>
                        <span className='car-info text-xs font-semibold text-gray-600 mt-2'>{selectedCarType.capacity}</span>
                    </div>
                )}
            </div>
        </div>
    )
}










const OutStationTravel = () => {
    const citiesFrom = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune", "Lucknow"];
    const citiesTo = ["Agra", "Aligarh", "Ambala", "Bareilly", "Bijnor", "Bulandshahr", "Chandigarh", "Dehradun", "Faridabad", "Ghaziabad", "Gurgaon", "Haridwar", "Karnal", "Kurukshetra", "Meerut", "Moradabad", "Muzaffarnagar", "Noida", "Panipat", "Roorkee", "Saharanpur", "Sonipat", "Yamunanagar", "Zirakpur"];

    const timestamps = ["05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30"];
    const [carTypes, setCarTypes] = useState([
        {
            type: 'Budget',
            car: 'Swift Dezire',
            capacity: '4+ Seater'
        },
        {
            type: 'Premium',
            car: 'Crysta',
            capacity: '6+ Seater'
        },
        {
            type: 'Family',
            car: 'Ertiga',
            capacity: '6+ Seater'
        },
    ]);

    const [pickupDate, setPickupDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [selectedType, setSelectedType] = useState('');

    // Function to handle select change
    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    // Find selected car type details
    const selectedCarType = carTypes.find((cartype) => cartype.type === selectedType);

    return (
        <div className="ride-selection  flex flex-wrap justify-center items-center w-full h-32 rounded-lg shadow-md text-black bg-white sm:shadow-none sm:h-[fit-content] sm:gap-2">
            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-one">
                <div className="city selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/maplocation.svg" alt="" />
                    From
                </div>
                <select className='bg-white city-select text-2xl font-bold sm:text-[16px]' name="city" id="">
                    {citiesFrom.map((city, index) => (
                        <option className='city-options' value={city} key={index}>{city}</option>
                    ))}
                </select>
            </div>

            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-two">
                <div className="city selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/maplocation.svg" alt="" />
                    To
                </div>
                <select className='bg-white city-select text-2xl font-bold sm:text-[16px]' name="city" id="">
                    {citiesTo.map((city, index) => (
                        <option className='city-options' value={city} key={index}>{city}</option>
                    ))}
                </select>
            </div>

            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-three">
                <div className="pickup-date selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" alt="" />
                    Pickup Date
                </div>
                <DatePicker
                    className='date-picker text-2xl font-bold sm:text-[16px] w-32 text-2xl font-bold sm:text-[16px]'
                    selected={pickupDate}
                    dateFormat='dd MMM, yy'
                    onChange={date => setPickupDate(date)}
                />
                <div className='bg-white time-select text-sm mt-2 font-bold-outstation'>
                    <select name="time" className='bg-white'  id="">
                        {timestamps.map((time, index) => (
                            <option className='time-options' value={time} key={index}>{time}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-four">
                <div className="return-date selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" alt="" />
                    Return Date
                </div>
                <DatePicker
                    className='date-picker text-2xl font-bold sm:text-[16px] w-32 text-2xl font-bold sm:text-[16px]'
                    selected={returnDate}
                    dateFormat='dd MMM, yy'
                    onChange={date => setReturnDate(date)}
                />
            </div>

            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-five">
                <div className="cartype selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/cartypegredient.svg" alt="" />
                    Car Type
                </div>
                <select className='bg-white cartype-select text-2xl font-bold sm:text-[16px]' name="cartype" onChange={handleSelectChange} value={selectedType}>
                    <option value="">Select Type</option>
                    {carTypes.map((cartype, index) => (
                        <option className='cartype-options text-base font-bold' value={cartype.type} key={index}>
                            {cartype.type}
                        </option>
                    ))}
                </select>
                {selectedCarType && (
                    <div className='detail-sub-info flex justify-between items-center'>
                        <span className='car-info text-xs font-semibold text-gray-600 mt-2'>{selectedCarType.car}</span>
                        <span className='car-info text-xs font-semibold text-gray-600 mt-2'>{selectedCarType.capacity}</span>
                    </div>
                )}
            </div>
        </div>
    )
}










const AirportTranfer = () => {
    const cities = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune", "Lucknow"];
    const timestamps = ["05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30"];
    const durations = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const [carTypes, setCarTypes] = useState([
        {
            type: 'Budget',
            car: 'Swift Dezire',
            capacity: '4+ Seater'
        },
        {
            type: 'Premium',
            car: 'Crysta',
            capacity: '6+ Seater'
        },
        {
            type: 'Family',
            car: 'Ertiga',
            capacity: '6+ Seater'
        },
    ]);

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedType, setSelectedType] = useState('');

    // Function to handle select change
    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    // Find selected car type details
    const selectedCarType = carTypes.find((cartype) => cartype.type === selectedType);

    return (
        <div className="ride-selection  flex flex-wrap justify-center items-center w-full h-32 rounded-lg shadow-md text-black bg-white sm:shadow-none sm:h-[fit-content] sm:gap-2">
            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-one">
                <div className="city selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/maplocation.svg" alt="" />
                    City
                </div>
                <select className='bg-white city-select text-2xl font-bold sm:text-[16px]' name="city" id="">
                    {cities.map((city, index) => (
                        <option className='city-options' value={city} key={index}>{city}</option>
                    ))}
                </select>
            </div>

            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-two">
                <div className="datepicker selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" alt="" />
                    Pickup Date
                </div>
                <DatePicker
                    className='date-picker text-2xl font-bold sm:text-[16px] w-32 text-2xl font-bold sm:text-[16px]'
                    selected={selectedDate}
                    dateFormat='dd MMM, yy'
                    onChange={date => setSelectedDate(date)}
                />
            </div>

            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-three">
                <div className="time selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/clocktime.svg" alt="" />
                    Pickup Time
                </div>
                <select className='bg-white time-select text-2xl font-bold sm:text-[16px]' name="time" id="">
                    {timestamps.map((time, index) => (
                        <option className='time-options' value={time} key={index}>{time}</option>
                    ))}
                </select>
            </div>
            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-four">
                <div className="duration selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/packageicon.svg" alt="" />
                    Package
                </div>
                <select className='bg-white duration-select  text-2xl font-bold sm:text-[16px]' name="duration" id="">
                    {durations.map((duration, index) => (
                        <option className='duration-options' value={duration} key={index}>{duration} Hours</option>
                    ))}
                </select>
            </div>

            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-five">
                <div className="cartype selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/cartypegredient.svg" alt="" />
                    Car Type
                </div>
                <select className='bg-white cartype-select text-2xl font-bold sm:text-[16px]' name="cartype" onChange={handleSelectChange} value={selectedType}>
                    <option value="">Select Type</option>
                    {carTypes.map((cartype, index) => (
                        <option className='cartype-options text-base font-bold' value={cartype.type} key={index}>
                            {cartype.type}
                        </option>
                    ))}
                </select>
                {selectedCarType && (
                    <div className='detail-sub-info flex justify-between items-center'>
                        <span className='car-info text-xs font-semibold text-gray-600 mt-2'>{selectedCarType.car}</span>
                        <span className='car-info text-xs font-semibold text-gray-600 mt-2'>{selectedCarType.capacity}</span>
                    </div>
                )}
            </div>
        </div>
    )
}










const LongTermRentals = () => {
    const cities = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune", "Lucknow"];
    const timestamps = ["05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30"];
    const durations = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const [carTypes, setCarTypes] = useState([
        {
            type: 'Budget',
            car: 'Swift Dezire',
            capacity: '4+ Seater'
        },
        {
            type: 'Premium',
            car: 'Crysta',
            capacity: '6+ Seater'
        },
        {
            type: 'Family',
            car: 'Ertiga',
            capacity: '6+ Seater'
        },
    ]);

    const [pickupDate, setPickupDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [selectedType, setSelectedType] = useState('');

    // Function to handle select change
    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    // Find selected car type details
    const selectedCarType = carTypes.find((cartype) => cartype.type === selectedType);

    return (
        <div className="ride-selection  flex flex-wrap justify-center items-center w-full h-32 rounded-lg shadow-md text-black bg-white sm:shadow-none sm:h-[fit-content] sm:gap-2">
            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-one">
                <div className="city selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/maplocation.svg" alt="" />
                    City
                </div>
                <select className='bg-white city-select text-2xl font-bold sm:text-[16px]' name="city" id="">
                    {cities.map((city, index) => (
                        <option className='city-options' value={city} key={index}>{city}</option>
                    ))}
                </select>
            </div>

            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-three">
                <div className="pickup-date selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" alt="" />
                    Pickup Date
                </div>
                <DatePicker
                    className='date-picker text-2xl font-bold sm:text-[16px] w-32 text-2xl font-bold sm:text-[16px]'
                    selected={pickupDate}
                    dateFormat='dd MMM, yy'
                    onChange={date => setPickupDate(date)}
                />
            </div>

            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-four">
                <div className="return-date selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" alt="" />
                    Return Date
                </div>
                <DatePicker
                    className='date-picker text-2xl font-bold sm:text-[16px] w-32 text-2xl font-bold sm:text-[16px]'
                    selected={returnDate}
                    dateFormat='dd MMM, yy'
                    onChange={date => setReturnDate(date)}
                />
            </div>

            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-three">
                <div className="time selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/clocktime.svg" alt="" />
                    Pickup Time
                </div>
                <select className='bg-white time-select text-2xl font-bold sm:text-[16px]' name="time" id="">
                    {timestamps.map((time, index) => (
                        <option className='time-options' value={time} key={index}>{time}</option>
                    ))}
                </select>
            </div>

            <div className="ride-selection-detail sm:w-full sm:p-[5px_10px] sm:border sm:border-[#cecece] sm:h-fit w-1/5 h-full p-3 flex-grow cursor-pointer rsd-five">
                <div className="cartype selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e] sm:text-[10px]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/cartypegredient.svg" alt="" />
                    Car Type
                </div>
                <select className='bg-white cartype-select text-2xl font-bold sm:text-[16px]' name="cartype" onChange={handleSelectChange} value={selectedType}>
                    <option value="">Select Type</option>
                    {carTypes.map((cartype, index) => (
                        <option className='cartype-options text-base font-bold' value={cartype.type} key={index}>
                            {cartype.type}
                        </option>
                    ))}
                </select>
                {selectedCarType && (
                    <div className='detail-sub-info flex justify-between items-center'>
                        <span className='car-info text-xs font-semibold text-gray-600 mt-2'>{selectedCarType.car}</span>
                        <span className='car-info text-xs font-semibold text-gray-600 mt-2'>{selectedCarType.capacity}</span>
                    </div>
                )}
            </div>
        </div>
    )
}