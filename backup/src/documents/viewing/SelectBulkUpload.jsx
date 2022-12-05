import React from 'react'

const SelectBulkUpload = () => {
  return (
        <div className='flex flex-col gap-4 justify-start bg-gray-200 rounded-xl shadow-xl border-0 h-full w-full p-2'>
            <h1 className='text-black text-[12px] italic p-2'>File Formats zip, jpg, png, gif, bmp</h1>
            <div className='flex flex-row gap-4'>
                <div className='relative w-full'>
                    <form>
                        <label htmlFor="fileUpload"
                              className='block h-12 w-full pt-3 rounded-sm border-dotted border-2 border-gray-500 bg-transparent text-center mb-2'
                        >
                            Drop files here
                        </label>
                        <input type="file" 
                            id='fileUpload'
                            multiple
                            className='block h-10 w-[40rem] hidden p-2 text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400'
                        />
                    </form>
                </div>
            </div>
        </div>
  )
}
export default SelectBulkUpload;