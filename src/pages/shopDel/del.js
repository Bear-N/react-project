import React, { Component } from 'react'
import "./del.css"
import home from '../../assets/img/img/home.png'
import good from '../../assets/img/img/home/goods.jpg'
export default class ShopDel extends Component {
    render() {
        return (
            <div className='wrap'>
                <div>
                    <div className="header">
                        购物车
                     </div>
                    <div className="main">
                        <ul>
                            <li>
                                <div className="top">
                                    <img src={home} alt="" />
                                    <p>山东省济南市</p>
                                </div>
                                <div className="text">
                                    <div className='right'>
                                        <ul>
                                            <li className='pic'>
                                                <img src={good} alt="" />
                                            </li>
                                            <li className='num'>
                                                <p>自行车</p>
                                                <button>-</button>
                                                <button>1</button>
                                                <button>+</button>
                                                <p>
                                                    <span>总价</span>
                                                    <span>2999.00</span>
                                                </p>
                                            </li>
                                            <li className='price'>
                                                <span>¥</span>
                                                <span>2999.00</span>
                                            </li>
                                            <li className='del'> 删除 </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="buy">
                        <ul>
                            <li>
                                <input type="checkbox" name="" id="" />
                                <span>全选</span>
                            </li>
                            <li>
                                <img src={home} alt="" />
                                <span>编辑</span>
                            </li>
                            <li>
                                <p>
                                    <span>合计：</span><span>0.00</span>
                                </p>
                                <p>
                                    （不含运费）
                                </p>
                            </li>
                            <li>
                                <span>去结算</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer">
                        <ul>
                            <li>
                                <div>
                                    <img src={home} alt="" />
                                </div>
                                <div>首页</div>
                            </li>
                            <li>
                                <div>
                                    <img src={home} alt="" />
                                </div>
                                <div>首页</div>
                            </li>
                            <li>
                                <div>
                                    <img src={home} alt="" />
                                </div>
                                <div>首页</div>
                            </li>
                            <li>
                                <div>
                                    <img src={home} alt="" />
                                </div>
                                <div>首页</div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}