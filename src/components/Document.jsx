import React from 'react';
import MyInboxTable from '../documents/MyInboxTable';


const Document = () =>{
    return(
        <div className="flex flex-col gap-4 bg-white h-full rounded-xl shadow-lg border">
            {/* <div className='2xl:w-full xl:w-full lg:w-full md:w-full xmd:w-[95%] sm:w-[88%] xsm:w-[70%]'> */}
                <div>   
                    <MyInboxTable />
                </div>
            {/* </div> */}
		</div>
    )
}
export default Document;