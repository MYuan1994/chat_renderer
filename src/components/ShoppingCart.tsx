import React, { useState, useEffect } from 'react';

import styles from './ShoppingCart.module.css'

import { FiShoppingCart } from 'react-icons/fi'

interface Props {
    count: number,
    username:string
}

interface State {
    isOpen: boolean,
    count: number
}

const ShoppingCart: React.FC<Props> = (props) => {
    // isOpen:false,
    // count:props.count
    const [count, setCount] = useState(props.count);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log('count', count)
        document.title = `已添加${count}猫进入购物车`
    }, [count])



    let handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if ((e.target as HTMLElement).nodeName === 'SPAN') {
            setIsOpen(!isOpen);
        }
    }

    let add = () => {
        setCount(count + 1)
    }

    let minus = () => {
        setCount(() => {
            return count > 0 ? count - 1 : count
        })
    }

    return (<div className={styles.cartContainer}>
        <button className={styles.button} onClick={handleClick}>
            <FiShoppingCart />
            <span> {props.username}的购物车 {count} 只</span>
        </button>
        <button onClick={minus}>-</button>
        <button onClick={add}>+</button>
        <div className={styles.cartDropDown}
            style={{
                display: isOpen ? "block" : "none"
            }}>
            <ul>
                <li>plan1</li>
                <li>plan2</li>
                <li>plan3</li>
            </ul>
        </div>
    </div>)
}

export default ShoppingCart;