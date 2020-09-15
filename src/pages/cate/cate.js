import React, { Component } from 'react'
import './cate.css'
import Header from '../../components/Header/Header'
//请求
import { reqCateTree } from "../../util/request"
export default class Cate extends Component {
    constructor() {
        super()
        this.state = {
            catetree: [],
            categoods: []
        }
    }
    componentDidMount() {
        reqCateTree().then(res => {
            if (res.data.code === 200) {
                this.setState({
                    catetree: res.data.list,
                    categoods: res.data.list[0].children
                })
            }
        });
    }
    getCateId(index) {
        reqCateTree().then(res => {
            this.setState({
                categoods: res.data.list[index].children
            })     
        })
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
                                    catetree.map((item, index) => {
                                        return <li key={item.id} onClick={() => { this.getCateId(index) }} id={item.id}>{item.catename}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="cate_man_right">
                            <ul>
                                {
                                    categoods.map((item, index) => {
                                        return (
                                            <li key={item.id} onClick={() => this.toList(item.id, item.catename)}>
                                                <div className='pic'><img src={item.img} alt="" /></div>
                                                <div className='picTitle'>{item.catename}</div>
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