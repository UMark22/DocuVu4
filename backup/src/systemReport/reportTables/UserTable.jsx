import React from 'react';
import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component'
import axios from 'axios';
import { IoCreateSharp } from 'react-icons/io5';
import { VscOpenPreview } from 'react-icons/vsc';


const UserTable = () => {
    const [posts, setPost] = useState([]);

	const columns = [{
		name: <h1 className='font-bold text-black'>Username</h1>,
		selector: (row) => row.username,
        sortable: true,
		maxWidth: "300px",
		
	},
	{
		name: <h1 className='font-bold text-black'>Created By</h1>,
		selector: (row) => row.name,
        sortable: true,
		maxWidth: "300px",
		
		
	},
	{
		name: <h1 className='font-bold text-black'>Created Date</h1>,
		selector: (row) => <div>09-10-22 10:22 PM</div>,
        sortable: true,
		maxWidth: "300px",
		
	
	},
	{
		name: <h1 className='font-bold text-black'>Document Type</h1>,
		selector: (row)=> <div className=''>Child</div>,
        sortable: true,
		maxWidth: "300px",
		
	},
    {
		name: <h1 className='font-bold text-black'>Access Rigths</h1>,
		selector: (row)=> <div className=''>Child</div>,
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
						title=""
                        columns={columns} 
                        data={posts}
                        pagination
                        paginationDefaultPage
						selectableRows
						selectableRowsHighlight
						fixedHeader
                        fixedHeaderScrollHeight='300px'
                        highlightOnHover
                        actions={
                                <>
                                    <div className='relative'>
                                        <button type='submit' id='auditGenerate'
                                            className='text-center pl-5 rounded-lg w-32 h-10 border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-[12px]'
                                        >
                                            <IoCreateSharp size={20} className='text-white text-[13px sm:absolute sm:top-[25%] sm:left-[8%] -translate-y-1/2]' />
                                            Generate Report 
                                        </button>
                                    </div>
                                    <div className='relative'>
                                        <button type='submit' id='bulkUpload'
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
                                                            id='userUsername' 
                                                            className='rounded-md h-8 w-full mr-5 border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                            <option value='1'>Username</option>
                                                            <option value='2'>sdddddddddddd</option>
                                                            <option value='3'>sdddddddddddd</option>
                                                            <option value='4'>sdddddddddddd</option>
                                                            <option value='5'>sdddddddddddd</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select id="userCreatedBy"
                                                            className='rounded-md h-8 w-full mr-5  border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                            <option value="2">Created By</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select id="userCreatedDate"
                                                            className='rounded-md h-8 w-full mr-5  border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                        <option value="1">Creadted Date</option>
                                                    </select>
                                                    </td>
                                                    <td>
                                                        <select id="userDocuType"
                                                            className='rounded-md h-8 w-full mr-5  border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                            <option value="1">Document Tyoe</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select id="userAccessRights"
                                                            className='rounded-md h-8 w-full mr-5  border-[1.5px] border-gray-300 outline-0 text-gray-700 text-sm font-light px-2 mb-2 focus:border-[#3C8DBC]'
                                                        >
                                                            <option value="1">Access Rights</option>
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
export default  UserTable;