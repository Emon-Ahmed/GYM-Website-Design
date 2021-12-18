import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='my-5 py-4 text-center'>
            <h1>NOT FOUND</h1>
            <Link to="/"><p>HOME PAGE</p></Link> 
        </div>
    )
}
