import React from 'react';


const Entry = ({postsPerPage, setpostsPerPage}) =>{

    const handleEntries = (event) => {
        setpostsPerPage(postsPerPage +({entries:parseInt(event)}));
        
    }
    return(
        <>
        <div className="flex items-center px-5">
            <strong className="text-basic text-black font-semibold">
                <div class="entries" className='flex-inline'>
                    <span className="text-sm text-black font-normal px-3">Show</span>
                    <select onChange={event => handleEntries(event.target.value)} className="border-[1px]  border-black h-6 w-14 text-black bg-white text-sm px-2 text-center inline-flex items-center focus:outline-0" >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                    </select>
                    <span className="text-sm text-black font-normal pl-3">Entries</span>
                </div>
            </strong>
        </div>
        </>
    )
}
export default Entry;