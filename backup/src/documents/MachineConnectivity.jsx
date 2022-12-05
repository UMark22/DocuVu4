import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileText } from 'react-icons/ai';
import { MdOutlineScanner } from 'react-icons/md';
import { RiArrowGoBackLine  } from "react-icons/ri";

const MachineConnectivity = () => {
    const navigate = useNavigate();

  return (
        <div className='flex justify-center w-full h-full'>
            <div className="flex flex-col gap-4 w-[34rem] h-[550px] bg-white shadow-xl rounded-xl">
                <div className='flex justify-start py-2 text-lg font-normal text-center pt-5'>
                    <div className="flex justify-center w-[45px] h-[40px] ml-1 -mt-3 mb-4 bg-gray-200 rounded-lg">
                        <button
                            onClick={() => navigate("/document")}
                            className="text-[22px] text-black relative"
                         >
                            <RiArrowGoBackLine  />
                        </button>
                    </div>  
                    <div className='pl-10'>
                        <h1>Select a file or scan a document to begin</h1>
                    </div>
                </div>
                <div className="flex flex-row gap-4 w-full h-auto">
                    <div className='flex'>
                        <div className='p-10 w-auto'>
                            <button type='submit'
                                    id='recongTxt'
                                    className='border-dotted border-2 border-[#0972B8] p-10 mb-5 text-[#0972B8]'
                                    onClick={() => alert('Recognize Text')}
                            >
                                <AiOutlineFileText size={100} />
                            </button>
                            <div className='flex justify-center'>
                                <span 
                                    className='text-center text-base font-semibold text-[#0972B8]'
                                >
                                    Recognize Text
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className='p-10 w-full'>
                                <button type='submit'
                                        id='btnScan'
                                        className='border-dotted border-2 border-[#0972B8] text-[#0972B8] p-10 mb-5'
                                        onClick={() => navigate("/documents/viewscan")}
                                >
                                    <MdOutlineScanner size={100} />
                                </button>
                                <div className='flex justify-center'>
                                    <span 
                                        className='text-center text-base font-semibold text-[#0972B8]'
                                    >
                                        Scan
                                    </span>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <h1 className='underline text-[#0972B8] text-base'>Help</h1>
                </div>
            </div>
        </div> 
  )
}
export default MachineConnectivity;