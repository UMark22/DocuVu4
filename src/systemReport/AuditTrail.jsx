import React from 'react';
import AuditTable from './reportTables/AuditTable';
const AuditTrail = () =>{
    return (
		<div className="flex flex-col bg-white h-full rounded-xl shadow-lg border">
      <div className="flex flex-row gap-4 justify-center">
        <div className='w-full'>
          <AuditTable /> 
        </div>
			</div>
		</div>
	)
}	
export default AuditTrail;