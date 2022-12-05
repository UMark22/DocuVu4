import React from 'react';
import ActivityLogTable from './reportTables/ActivityLogTable';


const ActivityLog = () =>{
    return (
		<div className="flex flex-col gap-4 bg-white h-full rounded-xl shadow-lg border">
			 <div className='py-2 text-lg ml-2 font-normal'>
                    <h1>Activity Log</h1>
            </div>
            <div className="flex flex-row gap-4 justify-center">
                <div className='w-full'>
                   <ActivityLogTable /> 
                </div>
			</div>
		</div>
	)
}	
export default ActivityLog;