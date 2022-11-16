import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Card.css'

const CobaAxios = () => {
    const [userData, setUserData] = useState([])

    const fetchData = () => {
        axios.get('https://randomuser.me/api/?results=14')
        .then((res) => {
            let users = res.data.results
            setUserData(users)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className='cards'>
        {userData.map(data => {
            return(
                <div className='card' key={data.id.value}>
                    <div className='blob-top'></div>
                    <span>
                        {<img src={data.picture.large} className='img' alt='description'/>}
                    </span>
                    <span>
                        <h4>{data.name.first}</h4>
                    </span>
                    <span>
                        <h3>{data.dob.age}</h3>
                    </span>
                    <span>
                        <h3>{data.location.country}</h3>
                    </span>
                    <div className='blob-bottom'></div>
                </div>
            )
        })}
        
    </div>
  )
}

export default CobaAxios