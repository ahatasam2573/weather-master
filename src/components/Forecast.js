import React from 'react';

const Forecast = ({ title }) => {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium uppercase'>{title}</p>
            </div>
            <hr className='my-2' />

            <div className='flex flex-row items-center justify-between text-white'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30 PM</p>
                    <img src="https://th.bing.com/th/id/R.21ca72ccb0feed3c895682e1d6863d6a?rik=%2bPN7qXcGm2oPFg&riu=http%3a%2f%2fwww.rw-designer.com%2ftaglib%2fdownload%2f6O2oYG0wQEWyZ7jWNzFpnQ.png&ehk=6opRoHBJ3W1pXnt6VXMYJ9FVuj5aLkoUdYTORXKQC5s%3d&risl=&pid=ImgRaw&r=0" className='w-6 my-1' alt="pic" />
                    <p className='font-medium'>24°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30 PM</p>
                    <img src="https://th.bing.com/th/id/R.21ca72ccb0feed3c895682e1d6863d6a?rik=%2bPN7qXcGm2oPFg&riu=http%3a%2f%2fwww.rw-designer.com%2ftaglib%2fdownload%2f6O2oYG0wQEWyZ7jWNzFpnQ.png&ehk=6opRoHBJ3W1pXnt6VXMYJ9FVuj5aLkoUdYTORXKQC5s%3d&risl=&pid=ImgRaw&r=0" className='w-6 my-1' alt="pic" />
                    <p className='font-medium'>24°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30 PM</p>
                    <img src="https://th.bing.com/th/id/R.21ca72ccb0feed3c895682e1d6863d6a?rik=%2bPN7qXcGm2oPFg&riu=http%3a%2f%2fwww.rw-designer.com%2ftaglib%2fdownload%2f6O2oYG0wQEWyZ7jWNzFpnQ.png&ehk=6opRoHBJ3W1pXnt6VXMYJ9FVuj5aLkoUdYTORXKQC5s%3d&risl=&pid=ImgRaw&r=0" className='w-6 my-1' alt="pic" />
                    <p className='font-medium'>24°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30 PM</p>
                    <img src="https://th.bing.com/th/id/R.21ca72ccb0feed3c895682e1d6863d6a?rik=%2bPN7qXcGm2oPFg&riu=http%3a%2f%2fwww.rw-designer.com%2ftaglib%2fdownload%2f6O2oYG0wQEWyZ7jWNzFpnQ.png&ehk=6opRoHBJ3W1pXnt6VXMYJ9FVuj5aLkoUdYTORXKQC5s%3d&risl=&pid=ImgRaw&r=0" className='w-6 my-1' alt="pic" />
                    <p className='font-medium'>24°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30 PM</p>
                    <img src="https://th.bing.com/th/id/R.21ca72ccb0feed3c895682e1d6863d6a?rik=%2bPN7qXcGm2oPFg&riu=http%3a%2f%2fwww.rw-designer.com%2ftaglib%2fdownload%2f6O2oYG0wQEWyZ7jWNzFpnQ.png&ehk=6opRoHBJ3W1pXnt6VXMYJ9FVuj5aLkoUdYTORXKQC5s%3d&risl=&pid=ImgRaw&r=0" className='w-6 my-1' alt="pic" />
                    <p className='font-medium'>24°</p>
                </div>

            </div>
        </div>
    );
};

export default Forecast;