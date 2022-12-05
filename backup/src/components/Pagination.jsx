import React from 'react';
import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component'
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaDownload } from 'react-icons/fa';



const Pagination = () => {
    const [posts, setPost] = useState([]);
	const [search, setSearch] = useState("");
	const [filteredDocumentType, setFilteredDocumentType] = useState([]);

	const columns = [{
		name: <h1 className='font-bold text-black'>Document Type</h1>,
		selector: (row) => row.name,
        sortable: true,
		maxWidth: "300px"
	},
	{
		name: <h1 className='font-bold text-black'>DocuType Root</h1>,
		selector: (row) => row.name,
		maxWidth: "200px"
		
	},
	{
		name: <h1 className='font-bold text-black'>Total Records</h1>,
		selector: (row) => row.postId,
		maxWidth: "200px"
	
	},
	{
		name: <h1 className='font-bold text-black'>Total Pages</h1>,
		selector: (row)=> row.id,
		maxWidth: "200px"
		
	},
	{
		name: <h1 className='font-bold text-black'>Total File Size</h1>,
		selector: (row) => "147,000kb",
		maxWidth: "200px",
		
	},
	{
		name: <h1 className='font-bold text-black'>Action</h1>,
		selector: (row) => <button type='submit' id='exportRow' className='outline-0' onClick={() => alert(row.name)} >
								<FaDownload  className='text-[#3C8DBC] '/>
							</button>,				  
		maxWidth: "200px",
		
	},
];
	useEffect(() => {
		const fetchPosts = async () => {
			try{
				const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
				setPost(res.data);
				setFilteredDocumentType(res.data);

			} catch (error){
				console.log(error);
			}
		}	
		fetchPosts();	
	}, []);

	useEffect(() => {
		const res = posts.filter(post => {
			return post.name.toLocaleLowerCase().indexOf(search) !== -1;
		})
		setFilteredDocumentType(res);
	}, [posts ,search]);

    return(
        <>
            <div className='relative'>
                <DataTable 
						title=""
                        columns={columns} 
                        data={filteredDocumentType}
                        pagination
						selectableRows
						selectableRowsHighlight
						fixedHeader
                        fixedHeaderScrollHeight='500px'
                        highlightOnHover
						subHeader
						subHeaderComponent={
							<>
							<div className="relative">
								<AiOutlineSearch size={25} className='focus:bg-white text-gray-700 sm:absolute sm:top-[20%] sm:left-[80%] -translate-y-1/2"' />
								<input type="text" placeholder='Search' id='searchTable'
									className='form-control bg-white text-sm text-black md:w-[150px] w-[150px] h-8 px-3 border-gray-200 border-[1px] focus:outline-0'
									value={search}
									onChange={(e) => setSearch(e.target.value)}
								/>
							</div>
							</>
						}
                    />
            </div>
        </>
    ) 
}
export default Pagination;