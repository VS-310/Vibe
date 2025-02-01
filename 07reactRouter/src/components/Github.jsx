import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/VS-310')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])

  return (
    <div className='bg-gray-600 text-white text-3xl flex justify-center'> 
        Repositories: {data.public_repos}
    </div>
  )
}

export default Github

export const github_info_loader = async() => {
    const response = await fetch('https://api.github.com/users/VS-310');
    const data = await response.json();
    return data;
}
