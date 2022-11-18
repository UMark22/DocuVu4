import React from 'react'
import { FiHardDrive } from 'react-icons/fi'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillFolder } from 'react-icons/ai'

const DashboardDocuVuStorage = ()  =>{

	return (
        <>
            <div className='flex flex-row gap-4'>
                <div className='w-full bg-white rounded-sm p-4 shadow-md rounded-xl flex items-center'> 
                    <div className="h-20 w-20 flex items-center justify-center rounded-full  bg-sky-500">
                        <FiHardDrive className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-black font-bold">C: Drive</span>
                            <div className="flex items-center">
                                <strong className="text-basic text-black font-semibold">90%</strong>
                            </div>
                            <div className="flex items-center">
                                <span className="text-sm text-black font-light">1.48TB free of 1.79TB</span>
                            </div>
                    </div>
                </div>
                <div className='w-full bg-white rounded-sm p-4 shadow-xl rounded-xl flex items-center'> 
                    <div className="h-20 w-20 flex items-center justify-center rounded-full  bg-green-500">
                        <FiHardDrive className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-black font-bold">D: Drive</span>
                            <div className="flex items-center">
                                <strong className="text-basic text-black font-semibold">70%</strong>
                            </div>
                            <div className="flex items-center">
                                <span className="text-sm text-black font-light">1.20TB free of 2.79TB</span>
                            </div>
                    </div>
                </div>
                <div className='w-full bg-white rounded-sm p-4 shadow-xl rounded-xl flex items-center'> 
                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-blue-500">
                        <FaUserAlt className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-black font-bold">User</span>
                            <div className="flex items-center">
                                <strong className="text-basic text-black font-semibold">120</strong>
                            </div>
                            <div className="flex items-center">
                                <span className="text-sm text-black font-light">Active Users</span>
                            </div>
                    </div>
                </div>
                <div className='w-full bg-white rounded-sm p-4 shadow-xl rounded-xl flex items-center'> 
                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#17203F]">
                        <AiFillFolder className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-black font-bold">Doctype</span>
                            <div className="flex items-center">
                                <strong className="text-basic text-black font-semibold">10</strong>
                            </div>
                            <div className="flex items-center">
                                <span className="text-sm text-black font-light">No. of Doctypes</span>
                            </div>
                    </div>
                </div>
            </div>
        </>
	);
};

export default DashboardDocuVuStorage;
