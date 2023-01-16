import React from 'react'
import List from '../List/List'
import { navList } from '../../Data API/NavList'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <nav className='main'>
            <div className="brand-div">
                <h2 className="brand-heading">
                    <Link to="/">
                        <h1 className="brand">ShopKart</h1>
                    </Link>
                </h2>
            </div>
<div className="menu">
            <ul className='list'>
                {navList.map((item)=>(
                    <List data={item} />
                ))}
            </ul>
            </div>
        </nav >
    </>
    )
}

export default Navbar