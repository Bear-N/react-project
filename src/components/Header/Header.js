import React, { Component } from 'react'
import './Header.css'

import { withRouter } from "react-router-dom";

// 1.只有路由组件才可以使用编程式导航，否则会报错。
// 2.如果一个非路由组件要使用编程式导航，需要通过withRouter()解决

class Header extends Component {
    goBack() {
        this.props.history.goBack()
    }
    register() {
        this.props.history.push("/register")
    }

    render() {
        let { title, back, register } = this.props;
        return (
            <div className='header'>
                {back ? <i className='header-goBack' onClick={() => { this.goBack() }} >返回</i> : null}
                <div className="header-title">
                    {title}
                </div>
                {register ? <div className='header-register' onClick={() => { this.register() }} >注册</div> : null}
            </div>
        )
    }
}
export default withRouter(Header)