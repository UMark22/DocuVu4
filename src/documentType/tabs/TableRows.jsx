import { CgFolderRemove } from 'react-icons/cg';

const TableRows = ({rowsData, deleteTableRows, handleChange})  =>{


    return(
        
        rowsData.map((data, index)=>{
            const {columnName,dataType, length, sequence} = data;
            return(
            <tr key={index}>
                <td className="">
                    <h1 className="w-2 h-6 text-[12px] text-gray-400 px-2 mt-2"
                    >
                        1
                    </h1>
                </td>
                <td className="">
                    <input type="text" 
                        id='columnName'
                        
                        onChange={(evnt)=>(handleChange(index, evnt))}  
                        className="h-6 w-64 px-2 text-black text-[12px] border border-gray-400 outline-0 mt-1"
                    />
                </td>
                <td className="">
                    <select name="" id="" className="h-6 w-28 px-2 text-black text-[12px] border border-gray-400 outline-0 mt-1" onChange={(evnt)=>(handleChange(index, evnt))} >
                        
                    </select>
                </td>
                <td className="">
                    <input type="number" 
                           id="length"
                       
                           onChange={(evnt)=>(handleChange(index, evnt))} 
                           className="h-6 w-16 px-2 text-black text-[12px] border border-gray-400 outline-0 mt-1"
                    /> 
                </td>
                <td className="">
                    <input type="number" 
                           id="seq"
                          
                           onChange={(evnt)=>(handleChange(index, evnt))} 
                           className="h-6 w-16 px-2 text-black text-[12px] border border-gray-400 outline-0 mt-1"
                    /> 
                </td>
                <td className="">
                    <input type="checkbox" 
                           id="display"  
                           onChange={(evnt)=>(handleChange(index, evnt))} 
                           className="h-4 w-6 px-2 text-black text-[12px] border border-gray-400 outline-0 mt-1"
                    /> 
                </td>
                <td className="">
                    <button type="submit"
                            className="" 
                            onClick={()=>(deleteTableRows(index))}
                    >
                            <CgFolderRemove size={20} className='text-red-700'/>
                    </button>
                </td>
            </tr>

            )
        })
   
    )
    
}

export default TableRows;