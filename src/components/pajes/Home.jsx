import React, { useState, useEffect } from 'react';
import AddTasks from './addTasks/AddTasks';

const Home = () => {
    const [timer, setTimer] = useState(1500);
    const [isActive, setIsActive] = useState(false);
   


    useEffect(() => {
        let interval;

        if (isActive && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, timer]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    const handleButtonClick = (duration) => {
        setTimer(duration);
        setIsActive(true);
    };

    const handlePauseResumeClick = () => {
        setIsActive((prevIsActive) => !prevIsActive);
    };

    const handleResetClick = () => {
        setTimer(1500);
        setIsActive(false);
    };

    return (
        <>
            <div className='container mx-auto my-10 w-3/5 border border-sky-300 rounded bg-blue-100 text-center'>
                <div className='flex text-xl font-semibold space-x-8 text-gray-700 justify-between items-center p-6'>
                    <button className='hover:text-sky-500' onClick={() => handleButtonClick(1500)}>Work</button>
                    <button className='hover:text-sky-500' onClick={() => handleButtonClick(300)}>Short Break</button>
                    <button className='hover:text-sky-500' onClick={() => handleButtonClick(900)}>Long Break</button>
                </div>

                <div className="py-10 text-6xl font-bold">
                    <div className="">{formatTime(timer)}</div>
                </div>

                <div className="text-xl font-semibold space-x-8 text-gray-700 justify-between items-center p-6">
                    <button className='hover:text-sky-500' onClick={handlePauseResumeClick}>{isActive ? 'Pause' : 'Resume'}</button>
                    <button className='hover:text-sky-500' onClick={handleResetClick}>Reset</button>
                </div>
            </div>

            <div className='text-xl text-center space-x-8 text-gray-700 justify-between items-center'>
                <>#1</>
                <p className='font-bold'>Time to focus!</p>
            </div>

            <div className='flex space-x-8 justify-between w-3/5 mx-auto text-xl font-bold py-5 border-b-4'>
                <p>Tasks</p>
                <div className='cursor-pointer border rounded bg-blue-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </div>
            </div>

           
            <AddTasks />
           
        </>
    );
}

export default Home;
