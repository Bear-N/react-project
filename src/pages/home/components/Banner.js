import React from 'react'
import { Carousel } from 'antd-mobile'

export default function Banner(props) {
    const {banner} = props;
    return (
        <div className='Banner'>
            <Carousel autoplay infinite>
                {
                    banner.map(item => {
                        return <img src={item.img} key={item.id} alt="" />
                    })
                }
            </Carousel>
        </div>
    )
}