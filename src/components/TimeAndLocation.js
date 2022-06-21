import React from 'react';

const TimeAndLocation = () => {
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <p className='text-white text-xl font-extraLight'>
                    Monday, 13 December 2022 | Local time: 1:05 PM
                </p>
            </div>
            <div className='flex items-center justify-center my-3'>
                <p className='text-white text-3xl font-medium'>Berlin, DE</p>
            </div>
        </div>
    );
};

export default TimeAndLocation;