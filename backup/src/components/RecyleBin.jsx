import React from 'react';
import RecyclebinTable from '../recyclebinTable/RecyclebinTable';

const RecyleBin = () => {
  return (
    <div className="flex flex-col gap-4 bg-white h-full rounded-xl shadow-lg border">
      <div className='py-2 text-lg ml-2 font-normal'>
          <h1>Recycle Bin</h1>
      </div>
			<div className="flex flex-row gap-4">
        <div className='w-full 2xl:w-full xl:w-full lg:w-full md:w-[88%] sm:w-[63%] xsm:w-1/2'>
          <RecyclebinTable />
        </div>
			</div>
		</div>
  )
}
export default RecyleBin;