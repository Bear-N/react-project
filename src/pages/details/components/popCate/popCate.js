import React, { Component } from 'react'
import './popCat.css'
import { withRouter } from "react-router-dom"
//请求
import { reqCartAdd } from "../../../../util/request"
import { successAlert } from "../../../../util/alert"
class popcate extends Component {
    toShopcart() {
        let user = JSON.parse(sessionStorage.getItem("user"))

        reqCartAdd({ uid: user.uid, goodsid: this.props.goodsinfo[0].id, num: 1 }).then(res => {
            successAlert(res.data.msg)
        })

        this.props.history.push("/index/cart")
    }
    render() {
        const { goodsinfo, specslist, changemask } = this.props
        return (
            <div className="popwrap" onClick={(e) => { changemask(e) }}>
                <div className="popfooter">
                    <ul>
                        <li className='pic'>
                            <div>
                                <img src={goodsinfo[0].img} alt="" />
                            </div>
                            <div>{goodsinfo[0].goodsname}</div>
                        </li>
                        <li className='title'>{goodsinfo[0].specsname}</li>
                        <li className='popcate'>
                            {
                                specslist.map((item, index) => {
                                    return (
                                        <p key={item}>{item}</p>
                                    )
                                })
                            }
                        </li>
                        <li className='end'>
                            <button onClick={() => { this.toShopcart() }}>加入购物车</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(popcate)