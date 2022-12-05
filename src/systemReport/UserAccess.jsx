import React from 'react';
import UserTable from './reportTables/UserTable';


const UserAccess = () =>{
    return (
		<div className="flex flex-col gap-4 bg-white h-full rounded-xl shadow-lg border">
		  <div className="flex flex-row gap-4 justify-center">
          <div className='w-full'>
            <UserTable /> 
          </div>
			</div>
		</div>
	)
}	
export default UserAccess;