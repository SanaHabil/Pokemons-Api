import React, {useState, useEffect} from 'react'
import axios from 'axios'
const All = () => {
    const [pokimon, setPokimon] = useState([])

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((res)=>{
            console.log(res.data.results)
            setPokimon(res.data.results)
        })
        .catch((err)=>{
        console.log('There is an Error')

        })
    },[])
    return (
        <div className="cards">
            <h2>All Pokimons</h2>
        {
            pokimon.map((item,idx)=>(
                <div key={idx}>
                    <li>{item.name}</li>
                </div>
                ))
        }
        </div>
        
        

    
    )
    }
    export default All