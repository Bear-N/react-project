import React from 'react'
import logo from '../../../assets/img/img/home/logo.jpg'

export default function Header() {
    return (
        <div className="index_header">
            <div className="index_logo">
                <img src={logo} alt="" />
            </div>
            <div className="index_search">
                <input type="text" placeholder='寻找商品' />
            </div>
        </div>
    )
}