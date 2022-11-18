import React from 'react';
import { useNavigate } from "react-router-dom";
import { FiRefreshCcw } from 'react-icons/fi';
import { TiCancel } from 'react-icons/ti';
import { BsCloudUpload } from "react-icons/bs";
import { AiOutlineSelect } from 'react-icons/ai';
import { RiArrowGoBackLine  } from "react-icons/ri";
import SelectBulkUpload from './viewing/SelectBulkUpload';

const MultipleUpload = () =>{
    const navigate = useNavigate()


    return (
        <>
            <div className="flex flex-col gap-4 bg-white w-full rounded-xl shadow-lg border p-4">
                <div className="lg:flex lg:flex-row lg:gap-4 xl:flex xl:flex-row xl:gap-4 md:flex md:flex-col md:gap-4 sm:flex sm:flex-col sm:gap-4 xsm:flex xsm:flex-col xsm:gap-4 px-4">
                    <div className="bg-gray-100 rounded-xl shadow-lg border bg-white h-full w-[40%] xl:w-[40%] lg:w-[40%] md:w-full sm:w-full p-4">
                        <div className='flex flex-row justify-start gap-2'>
                            <div className="flex justify-center w-[45px] h-[40px] -ml-1 -mt-1 mb-4 bg-gray-200 rounded-lg">
                                <button
                                onClick={() => navigate("/document")}
                                className="text-[22px] text-black relative"
                                >
                                <RiArrowGoBackLine  />
                                </button>
                            </div>
                            <div>
                                <h1 className='text-lg ml-2 font-normal'>Multiple Upload</h1>
                            </div>
                        </div>
                        <div className='flex flex-row gap-4 justify-start'>
                            <div>
                                <span className='text-[12px] italic text-[#0972B8] font-semibold mt-4'>No file selected</span>
                            </div> 
                        </div>
                        <div className='flex flex-row gap-4 pt-2 border border-gray-400 justify-between'>
                            <div>
                                <span className='text-[13px] text-gray-700 font-semibold mt-4 pl-2'>List of CSV</span>         
                            </div>
                            <div className='reltaive'>
                                <button type='submit'
                                        id='btnRefresh'
                                        className='pr-2'
                                        onClick={() => alert('Refresh')}
                                >
                                    <FiRefreshCcw />
                                </button>
                                
                            </div>
                        </div>
                        <div lassName='flex flex-row gap-4 h-full  p-3'>
                           <div className='bg-transparent border border-gray-400 h-[15rem]'>
                                <table className='table-auto'>
                                    <tr>
                                        <td className='w-96'>
                                            <span className='text-[12px] px-2'>AA-SAMPLE.csv</span>
                                        </td>
                                        <td>
                                            <button type='submit'
                                                    id='btnSelect'
                                                    className='pr-1'
                                                    onClick={() => alert('Selected')}
                                            >
                                                <AiOutlineSelect size={25} />
                                            </button>
                                        </td>
                                    </tr>
                                </table>
                            </div>  
                        </div>
                        <div lassName='flex flex-row gap-4 h-full'>
                            <div className='flex justify-between pt-4'>
                                <div>
                                    <span 
                                        className='text-[13px] text-red-500 font-semibold'
                                    >
                                        Error(s):
                                    </span>
                                    <span className='pl-2 text-[15px]'>
                                        0
                                    </span>
                                </div>
                                <div className='pr-36'>   
                                    <span 
                                        className='text-[13px] text-orange-500 font-semibold'
                                        >
                                        Warning(s):
                                    </span>
                                    <span className='pl-2 text-[15px]'>
                                        0
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-4 justify-center'>
                            <div className='relative pt-3 pb-5'>
                                <button type='submit'
                                    id='btnLoad'
                                    className='text-center pl-3 rounded-lg h-10 w-[8rem] border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-sm' 
                                    >
                                    <BsCloudUpload size={25} className='text-white text-sm sm:absolute sm:top-[45%] sm:left-[7%] -translate-y-1/2' />
                                        Upload
                                </button>
							</div>
                            <div className='relative pt-3 pb-5'>
                                <button type='submit'
                                    id='btnCancel'
                                    className='text-center pl-3 rounded-lg h-10 w-[8rem] border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-sm' 
                                >
                                    <TiCancel size={25} className='text-white text-sm sm:absolute sm:top-[45%] sm:left-[7%] -translate-y-1/2' />
                                        Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='2xl:w-[75%] xl:w-[75%]  lg:w-[75%] md:w-full xmd:w-[95%] sm:w-[88%] xsm:w-[70%]'>
                        <SelectBulkUpload />
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                  
                </div>
		    </div>
        </>
	)
}
	
export default MultipleUpload;