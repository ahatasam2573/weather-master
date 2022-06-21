import React from 'react';
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
    return (
        <div>
            <div className='flex justify-center items-center py-6 text-2xl font-semiBold text-cyan-500'>
                <p>Cloudy Weather</p>
            </div>
            <div className='flex flex-row items-center justify-between text-white py-3'>
                <img className='w-12' src="https://th.bing.com/th/id/R.21ca72ccb0feed3c895682e1d6863d6a?rik=%2bPN7qXcGm2oPFg&riu=http%3a%2f%2fwww.rw-designer.com%2ftaglib%2fdownload%2f6O2oYG0wQEWyZ7jWNzFpnQ.png&ehk=6opRoHBJ3W1pXnt6VXMYJ9FVuj5aLkoUdYTORXKQC5s%3d&risl=&pid=ImgRaw&r=0" alt="orange ball" />
                <p className='text-5xl'>34°</p>

                <div className='flex flex-col space-y-2'>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTemperature size={18} className='mr-1' />
                        Real Feel:
                        <span className='font-medium ml-1'>32°</span>
                    </div>

                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTear size={18} className='mr-1' />
                        Humidity:
                        <span className='font-medium ml-1'>43%</span>
                    </div>

                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilWind size={18} className='mr-1' />
                        Wind:
                        <span className='font-medium ml-1'>11 km/h</span>
                    </div>

                </div>
            </div>

            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-5'>
                <UilSun />
                <p className='font-light'>Rise: <span className='font-medium ml-1'>06.30AM</span></p>
                <p className='font-light'>|</p>

                <UilSunset />
                <p className='font-light'>Set: <span className='font-medium ml-1'>07.30PM</span></p>
                <p className='font-light'>|</p>

                <UilSun />
                <p className='font-light'>High: <span className='font-medium ml-1'>45°</span></p>
                <p className='font-light'>|</p>

                <UilSun />
                <p className='font-light'>Low: <span className='font-medium ml-1'>40°</span></p>
            </div>

        </div>
    );
};

export default TemperatureAndDetails;