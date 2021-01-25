import React from 'react'
import {Link} from 'react-router-dom'
import "./style.css"
const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi,</p>
                    <p>I'm <span className="span">Akash</span> Dubey</p>
                    <p>MERN <span className="span">Stack</span> Developer</p>
                </h1>
                <br/>
            <Link to="/about">
                <button className="info">About Me</button>
            </Link>
            </div>
            <div className="person">
            <img
            src={`${process.env.PUBLIC_URL}/invite1.png`} alt="person"/>
           
            </div>
        </div>
    )
}



export default Home;
