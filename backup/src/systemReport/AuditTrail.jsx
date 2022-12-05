import React from 'react';
import AuditTable from './reportTables/AuditTable';
const AuditTrail = () =>{
    return (
		<div className="flex flex-col gap-4 bg-white h-full rounded-xl shadow-lg border">
			 <div className='py-2 text-lg ml-2 font-normal'>
                    <h1>Uploaded Reports</h1>
            </div>
            <div className="flex flex-row gap-4 justify-center">
                <div className='w-full'>
                   <AuditTable /> 
                </div>
			</div>
		</div>
	)
}	
export default AuditTrail;