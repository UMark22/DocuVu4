import React from 'react';
import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component'
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdRestore } from 'react-icons/md';
import { HiTrash } from 'react-icons/hi';


const RecyclebinTable = () => {
    const [posts, setPost] = useState([]);
	const [search, setSearch] = useState("");
	const [filteredDocumentType, setFilteredDocumentType] = useState([]);

	const columns = [{
		name: <h1 className='font-bold text-black'>Document Name</h1>,
		selector: (row) => row.name,
        sortable: true,
		maxWidth: "300px",
		
	},
	{
		name: <h1 className='font-bold text-black'>Document Type</h1>,
		selector: (row) => row.username,
        sortable: true,
		maxWidth: "300px",
		
		
	},
	{
		name: <h1 className='font-bold text-black'>Deleted By</h1>,
		selector: (row) => row.name,
        sortable: true,
		maxWidth: "300px",
		
	
	},
	{
		name: <h1 className='font-bold text-black'>Deleted Date and Time</h1>,
		selector: (row)=> <div className=''>10-20-2002 02:13:08 PM</div>,
        sortable: true,
		maxWidth: "300px",
		
	},
    {
		name: <h1 className='font-bold text-black'>File Size</h1>,
		selector: (row)=> <div className=''>151KB</div>,
        sortable: true,
		maxWidth: "100px",
		
	},
	{
		name: <h1 className='font-bold text-black'>File Action</h1>,
		selector: (row) => <><div className=''>
                                <button type='submit' id='recycleRestore' className='ml-2 mr-3 outline-0 rounded-sm h-8 w-8' onClick={() => alert(row.name)} >
									<MdRestore size={20} className='text-violet-700 ml-1 text-[13px]'/>
								</button>
								<button type='submit' id='recycleDlt' className='outline-0 rounded-sm h-8 w-8' onClick={() => alert(row.name)} >
								<HiTrash size={20} className='text-red-700 ml-1 text-[13px]'/>
								</button>
							</div>
                            </>,	
        sortable: true,			  
		maxWidth: "150px",
		
	},
];
	useEffect(() => {
		const fetchPosts = async () => {
			try{
				const res = await axios.get('https://jsonplaceholder.typicode.com/users');
				setPost(res.data);
				setFilteredDocumentType(res.data);

			} catch (error){
				console.log(error);
			}
		}	
		fetchPosts();	
	}, []);

	useEffect(() => {
		const result = posts.filter((users) => {
			return users.name.toLocaleLowerCase().indexOf(search) !== -1;
      
		});
		setFilteredDocumentType(result);
	}, [search, posts]);

    return(
        <>
            <div className='relative'>
                <DataTable 
						title=""
                        columns={columns} 
                        data={filteredDocumentType}
                        pagination
                        paginationDefaultPage
						selectableRows
						selectableRowsHighlight
						fixedHeader
                        fixedHeaderScrollHeight='300px'
                        highlightOnHover
                        actions={
                                <>
                                    <div className="relative">
                                        <AiOutlineSearch size={25} className='focus:bg-white text-black sm:absolute sm:top-[50%] sm:left-[85%] -translate-y-1/2' />
                                        <input type="text" placeholder='Search...' id='searchTable' className='form-control bg-white text-sm text-black w-[200px] h-10 px-3 border-gray-200 border-[1px] focus:outline-0'
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </div>
                                    <div className='relative'>
                                        <button type='submit' id='restoreAll'
                                            className='text-center pl-3 rounded-lg w-28 h-10 border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-[12px]'
                                        >
                                            <MdRestore size={20} className='text-white text-[13px sm:absolute sm:top-[28%] sm:left-[10%] -translate-y-1/2]' />
                                            Restore All
                                        </button>
                                    </div>
                                    <div className='relative'>
                                        <button type='submit' id='purgeAll'
                                            className='text-center pl-3 rounded-lg w-28 h-10 border-[1px] border-red-700 bg-red-700 text-white text-[12px]'
                                        >
                                            <HiTrash size={20} className='text-white text-[13px sm:absolute sm:top-[28%] sm:left-[10%] -translate-y-1/2]' />
                                            Purge All 
                                        </button>
                                     </div>
                                </>
                        }
                    />
            </div>
        </>
    ) 
}
export default  RecyclebinTable;