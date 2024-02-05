import React, { useState, useEffect } from 'react';

const Home = () => {
    const [timer, setTimer] = useState(1500);
    const [isActive, setIsActive] = useState(false);
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [show, setShow] = useState(false);

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

    const handleClick = () => {
        setShow(!show);
    };

    const handleTaskInputChange = (event) => {
        setTaskInput(event.target.value);
    };

    const handleSaveTask = () => {
        if (taskInput.trim() !== '') {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
            setShow(false);
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
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

            <div className="w-3/5 mx-auto mt-5">
                <h2 className="text-xl font-bold"></h2>
                <div className="space-y-3">
                    {tasks.map((task, index) => (
                        <div key={index} className="border rounded p-3 flex justify-between items-center">
                            <div className="flex items-center">
                                <div className='pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                </div>
                               
                                <span>{task}</span>
                            </div>
                            <button onClick={() => handleDeleteTask(index)} className='hover:bg-red-500 hover:text-white p-2 border rounded-lg'>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
            
            <div onClick={handleClick} className='space-x-2 text-center justify-center flex py-5 my-3  w-3/5 mx-auto border-dashed border-2 border-sky-300 rounded bg-blue-100 cursor-pointer hover:bg-gray-100 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <button className='font-semibold text-xl '>Add Task</button>
            </div>

            {show && <div className='my-5 py-5 border rounded w-3/5 mx-auto text-center items-center justify-center '>
                <input className='w-1/2 border border-gray-100 px-4 py-2 mb-3 focus:outline-none focus:border-sky-400 bg-white' type="text" placeholder='What are you working on?' onChange={handleTaskInputChange} value={taskInput} />
                <button onClick={handleSaveTask} className='border flex py-2 pl-5 pr-5 rounded-md Is justify-center m-auto bg-white text-sky-500 hover:bg-gray-500 '>Save</button>
            </div>
            }

        </>
    );
}

export default Home;
