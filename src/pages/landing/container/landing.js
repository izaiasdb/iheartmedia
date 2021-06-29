import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import '../styles/landing.css'

const Landing = () => {
    return (
        <div>
            <div className='div-1anding'>
                <h1>iHeartMedia</h1>
            </div>
            <div>
                <p>Welcome to iHeartMedia - Music Lab</p>
                
                <Button type="primary">
                    <Link to={"/song"}>Song list</Link>
                </Button>                
            </div>

            <div className={"footer"} >
                <p>
                    <b>iHeartMedia - Music Lab - Code Challenge</b>
                </p>
            </div>
        </div>
    )
}

export default Landing;