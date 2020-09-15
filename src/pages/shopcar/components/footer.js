import React from 'react'
import change from '../../../assets/img/editor_hig.png'
import nochange from '../../../assets/img/editor_nor.png'
import checked from '../../../assets/img/radio_hig.png'
import nochecked from '../../../assets/img/radio_nor.png'
export default function Footer(props) {
    const {
        editcart,
        editicon,
        allchecked,
        changeAllChecked,
        allprice
    } = props
    console.log(props);

    return (
        <div>
            <div className='ShopCar_footer'>
                <ul>
                    <li>
                        <div>
                            {allchecked ? <img src={checked} alt="" className="picsize" /> : <img src={nochecked} alt="" className="picsize" />}
                        </div>
                        <div onClick={() => { changeAllChecked() }}>全选</div>
                    </li>
                    <li>
                        <div>
                            {editicon ? <img src={change} alt="" className="picsize" /> : <img src={nochange} alt="" className="picsize" />}
                        </div>
                        <div onClick={() => editcart()}>编辑</div>
                    </li>
                    <li>
                        <div>
                            合计：<span className='moneyAll'>{allprice}</span>
                        </div>
                        <div>（不含运费）</div>
                    </li>
                    <li className='ShopCar_buy'>去结算</li>
                </ul>
            </div>
        </div>
    )
}