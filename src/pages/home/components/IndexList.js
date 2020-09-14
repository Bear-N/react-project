import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class IndexList extends Component {
    render() {
        const { goods } = this.props
        return (
            <div >
                {
                    goods.map(item => {
                        return (
                            <Link className="index_list" key={item.id} to={"/detail/"+item.id}>
                                <div className="index_goodsPic">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='index_text'>
                                    <p className='index_title'>{item.goodsname}</p>
                                    <p>
                                        <span className='index_color'>¥</span>
                                        <span className='index_price index_color'>{item.price}</span>
                                    </p>
                                    <p className='index_buy'>
                                        <button>立即抢购</button>
                                    </p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}
