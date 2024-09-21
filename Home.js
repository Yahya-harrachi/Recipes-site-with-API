import React, { useEffect, useState } from 'react'
import './home.css'
import locationImage from '../../Images/location.png';
import axios from 'axios';

export default function Home() {


  const [ city, setCity ] = useState("casablanca")
  const [ wetherData, setWetherData] = useState(null)
  const URL = 'https://api.weatherapi.com/v1/current.json?key=a11d4930c11e4aa3bf9120630241408&q='

  const fetchData = async (city) =>{
     const allURL = URL + city
    try {
      const response = await axios.get(allURL)
      setWetherData(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  const handleCity =  (e)=>{
    setCity(e.target.value)
    fetchData(city)
  }
  useEffect(() =>{
    fetchData(city)
  },[])
  
  return (
    <div className='items'>
        <div className="cityDate">
          <div className="input">
            <img src={locationImage} alt="" />
            <input type="text" name='city' placeholder='Enter a City...' onChange={handleCity}/>
          </div>
          
          {wetherData && (
          <>
            <h1>{wetherData.location.name}</h1>
            <h3>{wetherData.location.country}</h3>
            <h4>{wetherData.location.localtime}</h4>
          </>
        )}
        </div>
        {wetherData && (
          <>
          <div className="degree">
          <h1>{wetherData.current.temp_c}&deg;C</h1>

          
        </div>
        <div className="degreeInfo">

            <img src={wetherData.current.condition.icon} alt="" />
            <h3>{wetherData.current.condition.text}</h3>
            <h3>Feels like : {wetherData.current.feelslike_c}&deg;C</h3>
          </div>
          </>
          
        )}
        

    </div>
  )
}
