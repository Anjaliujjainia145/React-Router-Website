import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/Anjaliujjainia145')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data)
    })
  }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-4xl '>
      Github Followers: {data.followers}
      
    </div>
  )
}

export default Github
