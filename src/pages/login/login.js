import React, { Component } from 'react'
import './login.css'
import Header from '../../components/Header/Header'
import { reqMemberLogin } from "../../util/request"
import { successAlert } from "../../util/alert"

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: '',
                password: ''
            },
        }
    }

    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }

    login() {
        reqMemberLogin(this.state.user).then(res => {
            if (res.data.code === 200) {
                sessionStorage.setItem("user", JSON.stringify(res.data.list))
                sessionStorage.setItem("isLogin", 1)
                successAlert(res.data.msg)
                this.props.history.push("/index/home")
            } else {
                this.setState({
                    user: {
                        phone: '',
                        password: ''
                    }
                })
            }
        })
    }

    render() {
        let { user} = this.state
        return (
            <div className="login">
                <Header title="登录" register></Header>
                <div className="login_form">
                    <ul>
                        <li className='login_li'> 账号</li>
                        <li>
                            <input type="text" placeholder="请输入账号" onChange={e => this.changeUser(e, 'phone')} value={user.phone} />
                        </li>
                        <li className='login_li'> 密码：</li>
                        <li>
                            <input type="password" placeholder="请输入密码" onChange={e => this.changeUser(e, 'password')} value={user.password} />
                        </li>
                        <li className="login_forget">
                            <span>忘记密码？</span>
                        </li>
                        <li className='login_button'>
                            <button onClick={() => { this.login() }}>登录</button>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}