import React, { Component } from 'react'
import './shopcar.css'
import Header from '../../components/Header/Header'
import Text from './components/text'
import Footer from './components/footer'

//请求
import { reqCartList, reqCartAdd, reqCartDelete, reqCartEdit } from "../../util/request"

export default class ShopCar extends Component {
  constructor() {
    super()
    this.state = {
      cartlist: [],
      editicon: false
    }
  }
  componentDidMount() {
    let user = JSON.parse(sessionStorage.getItem("user"))
    reqCartList({ uid: user.uid }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          cartlist: res.data.list
        })
      }
    })
  }

  //点击编辑
  editcart() {
    this.setState({
      editicon: !this.state.editicon
    })
  }
  //删除商品
  deletegoods(id) {
    reqCartDelete({ id: id }).then(res => {
      console.log(res);
    });

    let user = JSON.parse(sessionStorage.getItem("user"))
    reqCartList({ uid: user.uid }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          cartlist: res.data.list
        })
      }
    })
  }
  //修改商品
  updategoods(id, type) {
    reqCartEdit({ id: id, type: type }).then(res => {

      console.log(this.state.cartlist);
    })

    let user = JSON.parse(sessionStorage.getItem("user"))
    reqCartList({ uid: user.uid }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          cartlist: res.data.list
        })
      }
    })
  }
  render() {
    const { cartlist, editicon } = this.state;
    return (
      <div className='shopCar'>
        <div>
          <Header title='购物车'></Header>

          <Text cartlist={cartlist} editicon={editicon} deletegoods={(id) => this.deletegoods(id)}
            updategoods={(id, type) => this.updategoods(id, type)}></Text>
          <Footer editcart={() => this.editcart()} editicon={editicon}></Footer>
        </div>
      </div>
    )
  }
}
