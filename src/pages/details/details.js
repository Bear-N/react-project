import React, { Component } from 'react'
import './details.css'
import Header from '../../components/Header/Header'
import Popcate from "./components/popCate/popCate"
//请求
import { reqGoodsInfo } from "../../util/request"
import buy from '../../assets/img/img/cart_on.png'
import { withRouter } from "react-router-dom"
class Details extends Component {
    constructor() {
        super()
        this.state = {
            goodsinfo: [],
            isShow: false,//显示规格
            specslist: []
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id

        reqGoodsInfo({ id: id }).then(res => { //一级id的id
            console.log(res);

            if (res.data.code === 200) {
                this.setState({
                    goodsinfo: res.data.list,
                    specslist: JSON.parse(res.data.list[0].specsattr)
                })
            }
        });
    }
    showSpecs() {
        this.setState({
            isShow: true
        })
    }
    changemask(e) {
        if (e.target.className === "popwrap") {
            this.setState({
                isShow: false
            })
        }
    }
    render() {
        const { goodsinfo, isShow, specslist } = this.state;
        return (
            <div className='wrap'>
                <Header title="商品详情" back></Header>
                {isShow ? <Popcate goodsinfo={goodsinfo} specslist={specslist} changemask={(e) => this.changemask(e)}></Popcate> : null}
                {
                    goodsinfo.map(item => {
                        return (
                            <div key={item.id} className="goodsdetail">
                                <div className="main">
                                    <div className='pic'><img src={item.img} alt="" /></div>
                                    <div className='text'>
                                        <div className='title'>
                                            <div>{item.goodsname}</div>
                                            <div>
                                                <p>
                                                    <img src={buy} alt="" />
                                                </p>
                                                <p> 收藏</p>
                                            </div>
                                        </div>
                                        <div className='price'>
                                            <ul>
                                                <li className='colorRed'>¥</li>
                                                <li className='colorRed'>{item.price}</li>
                                                {item.ishot === 1 ? <li className='colorYellow box' >热卖</li> : null}
                                                {item.isnew === 1 ? <li className='colorYellow box' >新品</li> : null}
                                            </ul>
                                        </div>
                                        <div className='oldPrice'>¥{item.market_price}</div>
                                    </div>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: item.description }} className="des"></div>
                                <div className="footer">
                                    <div></div>
                                    <div onClick={() => { this.showSpecs() }}>加入购物车</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default withRouter(Details)