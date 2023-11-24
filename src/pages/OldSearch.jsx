import React, { createContext } from 'react'
import { useMainContext } from "../utils/MainContext";
export const MyContext = createContext()


const OldSearch = () => {
    const values = useMainContext();
    return (
    <>
    <section className="searchBack">
        <h2>Keçmiş axtarışlar</h2>
        <div className="oldSearch">
            {values.searchResults.map((x)=>(
            <div className="searches" key={x.id}>
            <p>{x.name} <span>{x.price}</span></p>
            <a href="#">Məhsul səhifəsinə keç</a>
        </div>
            ))}
        </div>
    </section>
    </>
  )
}

export default OldSearch