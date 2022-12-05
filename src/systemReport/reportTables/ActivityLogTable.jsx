import React from 'react';
import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component'
import axios from 'axios';
import { IoCreateSharp } from 'react-icons/io5';
import { VscOpenPreview } from 'react-icons/vsc';


const ActivityLogTable = () => {
    const [posts, setPost] = useState([]);

	const columns = [{
		name: <h1 className='font-bold text-black'>User</h1>,
		selector: (row) => row.name,
        sortable: true,
		maxWidth: "300px",
		
	},
	{
		name: <h1 className='font-bold text-black'>Activity</h1>,
		selector: (row) => <div className=''>Login</div>,
        sortable: true,
		maxWidth: "300px",
		
		
	},
	{
		name: <h1 className='font-bold text-black'>Date</h1>,
		selector: (row) => <div>09-20-22 10:00 PM</div>,
        sortable: true,
		maxWidth: "300px",
		
	
	},
	{
		name: <h1 className='font-bold text-black'>IP</h1>,
		selector: (row)=> <div className=''>192.168.6.54</div>,
        sortable: true,
		maxWidth: "300px",
		
	},
    {
		name: <h1 className='font-bold text-black'>Mac Address</h1>,
		selector: (row)=> <div className=''> 00-B0-D0-63-C2-26</div>,
        sortable: true,
		maxWidth: "300px",
		
	},
    {
		name: <h1 className='font-bold text-black'>Email Logs</h1>,
		selector: (row)=> <div className=''> sample@gmil.com</div>,
        sortable: true,
		maxWidth: "300px",
		
	},
    
];
	useEffect(() => {
		const fetchPosts = async () => {
			try{
				const res = await axios.get('https://jsonplaceholder.typicode.com/users');
				setPost(res.data);

			} catch (error){
				console.log(error);
			}
		}	
		fetchPosts();	
	}, []);

    return(
        <>
            <div className='relative'>
                <DataTable 
						title="Activity Log"
                        columns={columns} 
                        data={posts}
                        pagination
                        paginationDefaultPage
						selectableRows
						selectableRowsHighlight
						fixedHeader
                        responsive
                        fixedHeaderScrollHeight='300px'
                        highlightOnHover
                        actions={
                                <>
                                    <div className='relative'>
                                        <button type='submit' id='logsGenerate'
                                            className='text-center pl-5 rounded-lg w-32 h-10 border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-[12px]'
                                        >
                                            <IoCreateSharp size={20} className='text-white text-[13px sm:absolute sm:top-[25%] sm:left-[8%] -translate-y-1/2]' />
                                            Generate Report 
                                        </button>
                                    </div>
                                    <div className='relative'>
                                        <button type='submit' id='logsPreview'
                                            className='text-center pl-3 rounded-lg w-32 h-10 border-[1px] border-red-700 bg-red-700 text-white text-[12px]'
                                        >
                                            <VscOpenPreview size={20} className='text-white text-[13px sm:absolute sm:top-[28%] sm:left-[5%] -translate-y-1/2]' />
                                            Preview Report
                                        </button>
                                    </div>
                                </>
                        }
                        subHeader
                        subHeaderAlign = "center"
                        subHeaderComponent ={
                                <>
                                    <div className='p-2'>
                                        <table className='table-auto ml-10  '>
                                            <tbody className='p-10'>
                                                <tr>
                                                    <td>
                                                        <select 
                                                            id='logsUser' 
                                                            className='rounded-md h-8 w-full mr-5 border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                            <option value='1'>User</option>
                                                            <option value='2'>sdddddddddddd</option>
                                                            <option value='3'>sdddddddddddd</option>
                                                            <option value='4'>sdddddddddddd</option>
                                                            <option value='5'>sdddddddddddd</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select id="logsActivity"
                                                            className='rounded-md h-8 w-full mr-5  border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                            <option value="2">Activity</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select id="logsIP"
                                                            className='rounded-md h-8 w-full mr-5  border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                        <option value="1">IP address</option>
                                                    </select>
                                                    </td>
                                                    <td>
                                                        <select id="logsMac"
                                                            className='rounded-md h-8 w-full mr-5  border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                            <option value="1">Mac Address</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select id="logsEmail"
                                                            className='rounded-md h-8 w-full mr-5  border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                            <option value="1">Email Logs</option>
                                                        </select>
                                                    </td>       
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                        }
                    />
            </div>
        </>
    ) 
}
export default  ActivityLogTable;