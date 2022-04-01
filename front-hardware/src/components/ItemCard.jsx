import React, { useState } from 'react'
import { BiTrashAlt } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../App';

const ItemCard = ({ id, name, price, stock, quantity }) => {

    // const [quantity, setQuantity] = useState(1)
    const [priceItem, setPriceItem] = useState(price)
    const dispatch = useDispatch()

    const { deleteSellItem, increaseQuantity, decreaseQuantity } = bindActionCreators(actionCreators, dispatch)

    const incQuantity = () => {
        if (stock > quantity) {
            // setQuantity(prevQuantity => prevQuantity + 1)
            setPriceItem(prevPrice => prevPrice + price)
            increaseQuantity(id)
        }
    }

    const decQuantity = () => {
        if (quantity > 1) {
            // setQuantity(prevQuantity => prevQuantity - 1)
            setPriceItem(prevPrice => prevPrice - price)
            decreaseQuantity(id)
        }
    }

    const deleteItem = () => {
        deleteSellItem(id)
    }

    return (
        <div className='item'>
            <p className='name'>{name}</p>
            <div className='quantity'>
                <button className='up-down' onClick={decQuantity}>
                    ⯇
                </button>
                <span>{quantity}</span>
                <button className='up-down' onClick={incQuantity}>
                    ⯈
                </button>
            </div>
            <span className='price'>${priceItem}</span>
            <button className='delete' onClick={deleteItem}>
                <BiTrashAlt />
            </button>
        </div>
    )
}

export default ItemCard