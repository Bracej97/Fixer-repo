//Home Page
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useState } from "react";
import data from '../mock/user-mock.json';

    //get json data 
    // read it and look at id number and name 
    // set name hook to name in json data 

function Home(){
    
    const [name, setName] = useState('')
    const handleInputChange = (event) => {
        for(let i = 0; i < data.length; i++) {
            console.log(data[i])
        }
    }


    return (
        <div>
            <input type="text" className='input' value="input-value" onChange={handleInputChange}></input>
            <div className="card-holder">
                <div className="card">
                    <h2>
                        Hello {name}
                    </h2>
                </div>
                <div className="card">
                    <Link to='/profile'>Profile</Link>
                </div>
                <div className="card">
                    <Link to='/events'>Events</Link>
                </div>
                <div className="card">
                    <Link to='/faq'>FAQ</Link>
                </div>
                <div className="card">
                    <h1> Results</h1>
                </div>
                <div className="card">
                    <h1> Lorum Ipsum</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
