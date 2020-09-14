import React from 'react'
import time from '../../../assets/img/img/home/1.jpg'

export default function HomeTime(props) {
    const {seckill}=props
    return (
        <div className='HomeTime'>
            <div>
                <img src={time} alt="" />
                <p>限时抢购</p>
            </div>
            <div>
                <img src={time} alt="" />
                <p>限时抢购</p>
            </div>
            <div>
                <img src={time} alt="" />
                <p>限时抢购</p>
            </div>
            <div>
                <img src={time} alt="" />
                <p>限时抢购</p>
            </div>
        </div>
    )
}