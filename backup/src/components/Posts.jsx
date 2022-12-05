import React from 'react';

const Posts = ({posts, loading}) =>{
    if(loading){
        return <h2>Loading...</h2> 
    }
    return(
        <>
			<div className='px-5'>
				<table className="w-full text-gray-700">
					<thead className='border-b-2 border-gray-100'>
						<tr>
							<th className='p-3 text-sm font-bold tracking-wide text-left'>Document Type</th>
							<th className='p-3 text-sm font-bold tracking-wide text-left'>DocuType Root</th>
							<th className='p-3 text-sm font-bold tracking-wide text-left'>Total Records</th>
							<th className='p-3 text-sm font-bold tracking-wide text-left'>Total Pages</th>
						</tr>
					</thead>
					<tbody>
					{posts.map((post) => (
							<tr key={post} className='border-b-2 border-gray-100'>
								<td className='p-3 text-sm text-gray-700'>{post.name}</td>
								<td className='p-3 text-sm text-gray-700'>{post.username}</td>
								<td className='p-3 text-sm text-gray-700'>
                                    <span className='p-1.5 text-xs font medium uppercase tracking-wider'>{(post.id)}</span>
                                </td> 
                                <td className='p-3 text-sm text-gray-700'>{(post.phone)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
        </>
    )
}
export default Posts;