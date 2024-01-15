import React, { useRef } from 'react'
import { WeatherType } from '../pages/type/type'
import styles from "@/styles/Home.module.css";
import { useRouter } from 'next/router';

interface Props {
  data: WeatherType
}


const WeatherTable:React.FC<Props> = ({data}) => {
  const cityRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  return (
    <>
   <table className={`table table-borderless text-center ${styles.weatherTable}`}>
  <thead>
    <tr>
      <th scope="col">City</th>
      <th scope="col">Weather</th>
      <th scope="col">Description</th>
      <th scope="col">temp</th>
      <th scope="col">Min</th>
      <th scope="col">Max</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data.name}</td>
    {data.weather.map((w)=> {
        return <>
        <td>{w.main}</td>
        <td>{w.description}</td>
        </>
      })}
      
      <td>{Math.floor(data.main.temp - 273.15).toFixed(0)}&#x2103;</td>
      <td>{Math.floor(data.main.temp_min - 273.15).toFixed(0)}&#x2103;</td>
      <td>{Math.floor(data.main.temp_max - 273.15).toFixed(0)}&#x2103;</td>
    </tr>
  </tbody>
</table>
    <input type="text" placeholder='search for city' className={`${styles.inputSearch}`} ref={cityRef} onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>)=> {
      if(event.key == `Enter`){
        router.push({
          pathname:`/`,
          query: {
            q: cityRef.current?.value
          }
        })
        if(cityRef.current?.value)
      cityRef.current.value = ``
      }
      
    }} />
    </>
 
  )
}

export default WeatherTable



