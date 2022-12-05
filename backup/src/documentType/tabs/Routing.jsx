import React from 'react'
import { HiTrash } from 'react-icons/hi'
import { AiOutlineUserAdd } from 'react-icons/ai';
const Routing = () => {
  return (
    <>
        <div className='flex flex-row gap-4 pb-16'>
        <table className='table-fixed rounded-lg bg-white shadow-md shadow-gray-700/50'>
                <thead className='h-9 mb-2 rounded-lg bg-gray-300 shadow-md shadow-gray-700/50 pt-3'>
                    <th className='w-[12.5rem] h-10 text-[12px] text-black px-4'>Time Settings</th>
                    <th className='text-[12px] text-black'></th>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-gray-600 text-[12px] font-semibold px-4 py-4'>Approval Period:</td>
                        <td>
                            <input text='type' id='txtDate' value={1}
                                className='text-gray-600 text-[11px] font-semibold px-2 w-20 h-5 rounded-sm border-[1px] focus:bg-[#3C8DBC] focus:border-gray-700 border-gray-400 outline-0 px-2text-gray-600 text-[11px] font-semibold border-[1px] border-gray-400 outline-0'
                            />
                            <select id="approvalDate" className='text-gray-600 text-[11px] mr-4 ml-1 font-semibold h-5 w-32 border-[1px] border-gray-400 outline-0 '>
                                <option value="1">Days</option>
                                <option value="2">Moths</option>
                                <option value="3">Years</option>
                                <option value="4">Hours</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='flex flex-row gap-4'>
            <table className='rounded-lg bg-white shadow-md shadow-gray-700/50'>
                <thead className='h-9 pt-1 mb-2 rounded-lg bg-gray-300 shadow-md shadow-gray-700/50'>
                    <th className='text-[12px] border-x-96 text-black px-4'>Approver Settings</th>
                    <th className='text-[12px] border-x-96 text-black px-4'></th>
                    <th className='text-[12px] border-x-96 text-black px-4'></th>
                </thead>
                <tbody>
                    <tr>
                        <td className='py-3'>
                            <input type="text" id='approver' value={'Approver'}
                            className='text-gray-600 text-[11px] font-semibold ml-2 mr-2 px-2 h-6 w-48 rounded-sm border-[1px] focus:bg-[#3C8DBC] focus:border-gray-700 border-gray-400 outline-0 px-2text-gray-600 text-[11px] font-semibold border-[1px] border-gray-400 outline-0'
                            />
                        </td>
                        <td>
                            <input type="text" id='approver' value={'Surrogate Approver'}
                                className='text-gray-600 text-[11px] font-semibold h-6 w-48 rounded-sm border-[1px] focus:bg-[#3C8DBC] focus:border-gray-700 border-gray-400 outline-0 px-2text-gray-600 text-[11px] font-semibold border-[1px] border-gray-400 outline-0 outline-0'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select id="approver" className='text-gray-600 text-[11px] ml-2 mr-2 font-semibold h-5 w-48 border-[1px] border-gray-400 outline-0 '>
                                <option value="1">Jey Maru(nxp35177)</option>
                                <option value="2">Jey Maru(nxp35177)</option>
                                <option value="3">Jey Maru(nxp35177)</option>
                                <option value="4">Jey Maru(nxp35177)</option>
                            </select>
                        </td>
                        <td>
                            <select id="selectApprover" className='text-gray-600 text-[11px] font-semibold h-5 w-48 border-[1px] border-gray-400 outline-0 '>
                                <option value="1">--Select Approver--</option>
                                <option value="2">Jey Maru(nxp35177)</option>
                                <option value="3">Jey Maru(nxp35177)</option>
                                <option value="4">Jey Maru(nxp35177)</option>
                            </select>
                        </td>
                        <td>
                            <button type='submit' 
                                    id='addApprover' 
                                    className='pt-3'
                                    onClick={() => alert('Add Routing')}
                            >
                                    <AiOutlineUserAdd size={20} className='text-[#0972B8]' />
                            </button>
                            <button type='submit' 
                                    id='dltApprover' 
                                    className='pt-3'
                                    onClick={() => alert('Delete Routing')}
                            >
                                    <HiTrash size={20} className='text-red-600' />
                            </button>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='flex flex-row gap-4 justify-start'>
            <div className='pt-8'>
                <button type='submit' id='btnSaveApprover'
                    className='mr-2 ml-2 rounded-lg w-[100px] h-8 border-[1px] border-blue-700 bg-[#0972B8] text-white text-[12px]'
                >
                    Save
                </button>
            </div>
        </div>
    </>
  )
}
export default Routing;
