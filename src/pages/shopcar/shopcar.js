import React, { Component } from 'react'
import './shopcar.css'
import Header from '../../components/Header/Header'
import Text from './components/text'
import Footer from './components/footer'
import { confirmAlert, successAlert } from "../../util/alert"

//请求
import { reqCartList, reqCartDelete, reqCartEdit } from "../../util/request"

export default class ShopCar extends Component {
  constructor() {
    super()
    this.state = {
      cartlist: [],
      editicon: false,
      allchecked: false,
      waitreq: true//发请求的开关
    }
  }
  componentDidMount() {
    let user = JSON.parse(sessionStorage.getItem("user"))
    reqCartList({ uid: user.uid }).then(res => {
      if (res.data.code === 200) {
        const list = res.data.list ? res.data.list : []
        list.forEach(item => {
          item.checked = false
        })
        this.setState({
          cartlist: list
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
    confirmAlert(() => {
      reqCartDelete({ id: id }).then(res => {
        let user = JSON.parse(sessionStorage.getItem("user"))
        reqCartList({ uid: user.uid }).then(res => {
          if (res.data.code === 200) {
            this.setState({
              cartlist: res.data.list
            })
          }
        })
      })
    })
  }
  //修改商品
  updategoods(arr) {
    let goods = arr[0];
    let type = arr[1];
    arr[2].preventDefault();
    const { waitreq } = this.state
    if (type === 1) {
      if (goods.num <= 1) {
        successAlert("宝贝不能再减少了")
        return;
      }
    }
    if (waitreq) {
      this.setState({
        waitreq: false
      });

      reqCartEdit({ id: goods.id, type: type }).then(res => {
      })

      let user = JSON.parse(sessionStorage.getItem("user"))
      let checkedArr = this.state.cartlist.map(item => item.checked)
      reqCartList({ uid: user.uid }).then(res => {
        this.setState({
          waitreq: true
        })
        if (res.data.code === 200) {
          let list = res.data.list ? res.data.list : [];
          list.forEach((item, index) => {
            list[index].checked = checkedArr[index]
          })
          this.setState({
            cartlist: list
          })
        }
      })
    }
  }
  //全选
  changeAllChecked() {
    this.setState({
      allchecked: !this.state.allchecked,
      cartlist: this.state.cartlist.map(item => {
        item.checked = !this.state.allchecked
        return item;
      })
    })
  }
  //单选
  changeOneChecked(index) {
    const { cartlist } = this.state
    cartlist[index].checked = !this.state.cartlist[index].checked
    this.setState({
      cartlist,
      allchecked: this.state.cartlist.every(item => item.checked)
    })
  }

  render() {
    const { cartlist, editicon, allchecked } = this.state;
    var allprice = 0;
    cartlist.forEach(item => {
      if (item.checked) {
        allprice += item.price * item.num
      }
    })
    return (
      <div className='shopCar'>
        <div>
          <Header title='购物车'></Header>

          <Text
            cartlist={cartlist}
            editicon={editicon}
            deletegoods={(id) => this.deletegoods(id)}
            updategoods={(id, type) => this.updategoods(id, type)}
            changeOneChecked={(index) => this.changeOneChecked(index)}>
          </Text>

          <Footer
            editicon={editicon}
            allchecked={allchecked}
            allprice={allprice}
            editcart={() => this.editcart()}
            changeAllChecked={() => this.changeAllChecked()}>
          </Footer>
        </div>
      </div>
    )
  }
}
