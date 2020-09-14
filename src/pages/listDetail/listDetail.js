import React, { Component } from 'react'
import './listDetail.css'
import Header from '../../components/Header/Header'
//请求
import { reqGoodsInfo } from "../../util/request"

export default class ListDetail extends Component {
    constructor() {
        super()
        this.state = {
            goodsinfo: [],
            title: ""
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id
        let title = this.props.match.params.title
        reqGoodsInfo({ id: id }).then(res => {
            if (res.data.code === 200) {
                this.setState({
                    title:title,
                    goodsinfo: res.data.list
                })
            }
        });
    }
    render() {
        const { goodsinfo, title } = this.state
        return (
            <div className='wrap'>
                <Header title={title} back></Header>
                <div className="main">
                    <ul>
                        {
                            goodsinfo.map(item => {
                                return (
                                    <li key={item.id}>
                                        <div className='pic'>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className='text'>
                                            <p className='textTitle'>{item.goodsname}</p>
                                            <p className='price'>
                                                <span className='color'>¥</span>
                                                <span className='color'>{item.price}</span>
                                            </p>
                                            <p className='button'>
                                                <button>立即抢购</button>
                                            </p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}