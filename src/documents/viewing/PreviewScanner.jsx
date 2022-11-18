import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BsCloudUpload } from 'react-icons/bs';
import { TfiSave } from 'react-icons/tfi';
import sampleimage from './loginbackground.jpg';

const PreviewScanner = () => {
  const navigate =  useNavigate();

  return (
        <div className='flex flex-row gap-4 bg-gray-400 rounded-xl shadow-xl border-0 h-full w-full text-center'>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-sm p-2'>Preview Image</h1>

              <div className='flex-1 p-4 min-h-0 overflow-auto'>
                    {/* Container for image*/}
                <div className='flex flex-row gap-4'>
                  <img 
                    src={sampleimage} 
                    alt="preview" 
                    className='w-full h-[100vh]'
                  /> 
                </div>
                </div>

            <div className='flex flex-row gap-4 p-3'>
              <div className='relative pt-3'>
                <button type='submit'
                        id='scanSave'
                        className='pr-5 rounded-lg h-10 w-[8rem] border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-sm' 
                        onClick={() => alert("Successfully Save")}
                >
                        <TfiSave size={15} className='text-white text-[13px sm:absolute sm:top-[60%] sm:left-[8%] -translate-y-1/2' />
                        Save
                </button>
              </div>
              <div className='relative pt-3'>
                <button type='submit'
                        id='scanUpload'
                        className='text-center pl-3 rounded-lg h-10 w-[8rem] border-[1px] border-[#17203F] bg-[#17203F] text-white text-sm' 
                        onClick={() => navigate("/documents/uploadscanfile")}
                  >
                        <BsCloudUpload size={15} className='text-white text-sm sm:absolute sm:top-[60%] sm:left-[7%] -translate-y-1/2' />
                        Upload FIles
                  </button>
                </div>
            </div>
        </div>
      </div>    
  )
}
export default PreviewScanner;