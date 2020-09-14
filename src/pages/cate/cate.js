import React, { Component } from 'react'
import './cate.css'
import Header from '../../components/Header/Header'
//请求
import { reqCateTree, reqGoods } from "../../util/request"
export default class Cate extends Component {
    constructor() {
        super()
        this.state = {
            catetree: [],
            fid: [],
            categoods: []

        }
    }
    componentDidMount() {
        reqCateTree().then(res => {
            console.log(res.data);
            if (res.data.code === 200) {
                this.setState({
                    catetree: res.data.list,
                    fid: res.data.list.id
                })
            }
        });
        reqGoods({ fid: 12 }).then(res => { //一级id
            if (res.data.code === 200) {
                this.setState({
                    categoods: res.data.list
                })
            }
        });
    }
    getCateId(e) {
        // console.log(e.target.getAttribute("id"));
        reqGoods({ fid: e.target.getAttribute("id") }).then(res => {
            if (res.data.code === 200) {
                this.setState({
                    categoods: res.data.list
                })
            }
        });
    }
    toList(id, title) {
        this.props.history.push("/listdetail/" + id + "/" + title)
    }
    render() {
        const { catetree, categoods } = this.state;
        return (
            <div>
                <Header title='分类' back></Header>
                <div className='cate'>
                    <div className="cate_man">
                        <div className="cate_man_left">
                            <ul>
                                {
                                    catetree.map(item => {
                                        return <li key={item.id} onClick={(e) => { this.getCateId(e) }} id={item.id}>{item.catename}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="cate_man_right">
                            <ul>
                                {
                                    categoods.map((item, index) => {
                                        return (
                                            <li key={item.id} onClick={() => this.toList(item.id, item.goodsname)}>
                                                <div className='pic'><img src={item.img} alt="" /></div>
                                                <div className='picTitle'>{item.goodsname}</div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}