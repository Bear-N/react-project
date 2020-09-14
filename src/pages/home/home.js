import React, { Component } from 'react'
import './home.css'
// 头部
import Header from './components/IndexHeader'
// 轮播图
import Banner from './components/Banner'
// 限时抢购
import HomeTime from './components/HomeTime'
// 商品列表
import IndexList from './components/IndexList'


//请求
import { reqBannerList, reqSeckillList, reqIndexGoods} from "../../util/request"
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            banner: [],
            goods: []
        }
    }

    componentDidMount() {
        reqBannerList().then(res => {
            if (res.data.code === 200) {
                this.setState({
                    banner: res.data.list
                })
            }
        });
        // reqSeckillList().then(res => {
        //     console.log(res);

        //     // if (res.data.code === 200) {
        //     //     this.setState({
        //     //         seckill: res.data.list
        //     //     })
        //     // }
        // })

        reqIndexGoods().then(res => {
            if (res.data.code === 200) {
                this.setState({
                    goods: res.data.list[0].content
                })
            }
        });

    }

    render() {
        const { banner, seckill, goods } = this.state;
        return (
            <div className='home'>
                <Header></Header>
                {banner.length > 0 ? <Banner banner={banner}></Banner> : null}
                {/* {seckill.length > 0 ? <HomeTime seckill={seckill}></HomeTime> : null} */}
                {goods.length > 0 ? <IndexList goods={goods}></IndexList> : null}
            </div>
        )
    }
}