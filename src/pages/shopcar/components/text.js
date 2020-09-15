import React from 'react'
import checked from '../../../assets/img/radio_hig.png'
import noChecked from '../../../assets/img/radio_nor.png'
import address from '../../../assets/img/store.png'
export default function Text(props) {
    const { cartlist, editicon, deletegoods, updategoods, changeOneChecked } = props
    return (
        <div>
            <div className="ShopCar_Main">
                {
                    cartlist.map((item, index) => {
                        return (
                            <ul key={item.id}>
                                <li className='ShopCar_address'>
                                    <div >
                                        <img src={address} alt="" className="address_pic" />
                                    </div>
                                    <div>山东省济南市</div>
                                </li>
                                <li className='ShopCar_text'>
                                    {editicon === false ? <div className='carCheck hidecheck' >
                                        <div onClick={() => { changeOneChecked(index) }}>{item.checked ? <img src={checked} alt="" className="checkimg" /> :
                                            <img src={noChecked} alt="" className="checkimg" />}</div>
                                    </div> : null}

                                    <div className='carImg'>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className='carNum'>
                                        <p> {item.goodsname}</p>
                                        <p>
                                            <button onClick={(e) => updategoods([item, 1, e])}>-</button>
                                            <button>{item.num}</button>
                                            <button onClick={(e) => updategoods([item, 2, e])}>+</button>
                                        </p>
                                        <p>
                                            总价：<span>{item.num >= 1 ? item.num * item.price : item.price}</span>
                                        </p>
                                    </div>
                                    <div className='carMoney'>
                                        ¥<span>{item.price}</span>
                                    </div>
                                    {editicon ? <div className="carDel" onClick={() => { deletegoods(item.id) }}>删除</div> : null}
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}