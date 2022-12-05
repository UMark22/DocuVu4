import React from 'react';

const DocumentAccess = () => {
  return (
    <div className='flex flex-row gap-4 justify-start bg-white rounded-xl shadow-lg border-0 h-[26rem] '>
        <div className='w-[60%]'>
            <h1 className='font-semibold text-sm pt-2 text-center'>Document Access</h1>
        </div>
        <div className='w-full'>
            <div>
                <h1 className='font-semibold text-sm pt-2 text-center'>Group Schedule</h1>
            </div>
            <div>
                <input type="checkbox" id="alwaysAllow" />
                <label for="alwaysAllow" className='text-[12px] font-light pr-2'>Always Allow</label>
            </div>
            <div className='w-full'>
                <table className='table-auto'>
                    <thead className='border-b-[1.5px] border-gray-100'>
                        <tr>
                            <td className='py-2 text-sm font-bold text-gray-700 '>Days</td>
                            <td className='py-2 text-sm font-bold text-gray-700 w-1/2'>Start Time</td>
                            <td className='py-2 text-sm font-bold text-gray-700 w-full'>End Time</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b-[1px] border-gray-100'>
                            <td className='p-2 text-sm'>Monday:</td>
                            <td><input type="time" id='monStr' className='h-8 w-[95%] border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]' /></td>
                            <td><input type="time" id='monEnd' className='h-8 w-[95%] border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]' /></td>
                        </tr>
                        <tr className='border-b-[1px] border-gray-100'>
                            <td className='p-2 text-sm'>Tuesday:</td>
                            <td><input type="time"  id='tuesStr' className='h-8 w-[95%] border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC] ' /></td>
                            <td><input type="time"  id='tuesnd' className='h-8 w-[95%] border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]' /></td>
                        </tr>
                        <tr className='border-b-[1px] border-gray-100'>
                            <td className='p-2 text-sm'>Wenesday:</td>
                            <td><input type="time" id='wedStr' className='h-8 w-[95%] border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2  mb-2 focus:border-[#3C8DBC]'/></td>
                            <td><input type="time" id='wedEnd' className='h-8 w-[95%] border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2  mb-2 focus:border-[#3C8DBC]' /></td>
                        </tr>
                        <tr className='border-b-[1px] border-gray-100'>
                            <td className='p-2 text-sm'>Thursday:</td>
                            <td><input type="time" id='thuStr' className='h-8 w-[95%] border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]' /></td>
                            <td><input type="time" id='thuEnd' className='h-8 w-[95%] border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]' /></td>
                        </tr>
                        <tr className='border-b-[1px] border-gray-100'>
                            <td className='p-2 text-sm'>Friday:</td>
                            <td><input type="time" id='friStr' className='h-8 w-[95%] border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]' /></td>
                            <td><input type="time" id='friEnd' className='h-8 w-[95%] border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]' /></td>
                        </tr>
                        <tr className='border-b-[1px] border-gray-100'>
                            <td className='p-2 text-sm'>Saturday:</td>
                            <td><input type="time" id='satStr' className='h-8 w-[95%] border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]' /></td>
                            <td><input type="time" id='satEnd' className='h-8 w-[95%] border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]' /></td>
                        </tr>
                        <tr>
                            <td className='p-2 text-sm'>Sunday:</td>
                            <td><input type="time" id='sunStr' className='h-8 w-[95%] border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2  mb-2 focus:border-[#3C8DBC]' /></td>
                            <td><input type="time" id='sunEnd' className='h-8 w-[95%] border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2  mb-2 focus:border-[#3C8DBC]' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
  )
}
export default DocumentAccess;