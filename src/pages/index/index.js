import React, { Component } from 'react'

import { Switch, Route, Redirect, NavLink } from "react-router-dom"

import './index.css'
// 二级路由引入
import Home from '../home/home'
import Cate from '../cate/cate'
import ShopCart from '../shopcar/shopcar'
import Me from '../me/Me'

// footer 图片
import homeY from "../../assets/img/tab_home_hig.png"
import homeN from "../../assets/img/tab_home_nor.png"

import meY from "../../assets/img/tab_me_hig.png"
import meN from "../../assets/img/tab_me_nor.png"

import orderY from "../../assets/img/tab_menu_hig.png"
import orderN from "../../assets/img/tab_menu_nor.png"

import carY from '../../assets/img/tab_shopping_hig.png'
import carN from '../../assets/img/tab_shopping_nor.png'

export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            nav: [
                {
                    name: "首页",
                    selected: homeY,
                    noSelected: homeN,
                    path: "/index/home"
                },
                {
                    name: "分类",
                    selected: orderY,
                    noSelected: orderN,
                    path: "/index/cate"
                },
                {
                    name: "购物车",
                    selected: carY,
                    noSelected: carN,
                    path: "/index/cart"
                },
                {
                    name: "我的",
                    selected: meY,
                    noSelected: meN,
                    path: "/index/me"
                },
            ]
        }
    }


    render() {
        return (
            <div className="index">
                <Switch>
                    <Route path='/index/home' component={Home} ></Route>
                    <Route path='/index/cate' component={Cate} ></Route>
                    <Route path='/index/cart' component={ShopCart} ></Route>
                    <Route path='/index/me' component={Me} ></Route>
                    <Redirect to='/index/home'></Redirect>
                </Switch>

                <div className="indexfooter">
                    {
                        this.state.nav.map(item => {
                            return (
                                <NavLink key={item.path} to={item.path}>
                                    <img src={this.props.location.pathname === item.path ? item.selected : item.noSelected} alt="" />
                                    <div className="nav">{item.name}</div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}