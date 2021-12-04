import React from "react"
import Header from "../components/Header"
import { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

export default function BeersListPage (){

    const [beers, setBeers] = useState([]);

    useEffect(()=>{
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            setBeers(response.data)
        })
        .catch(console.log)
    }, [])

    return(
        <div>
            <Header/>
            {beers.map((beer) => (
                <Link to={`/beers/${beer._id}`}>
                <div key={beer._id} className="card">
                    <img src={beer.image_url} alt="beer" />
                    <p>{beer.name}</p>
                    <p>{beer.contributed_by}</p>
                </div>
                </Link>
                
            ))}
        </div>
    )   
}
