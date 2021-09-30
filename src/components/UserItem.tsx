import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


import 'font-awesome/css/font-awesome.css'
import styles from './UserItem.module.css'

interface itemProps {
    chatId: string,
    username: string,
    lastMsg: string,
    date: string,
    isRemind: boolean | undefined,
    isTop: boolean,
    userId: string
}

const UserItem: React.FC<itemProps> = (props) => {
    const url=require(`./../img/${props.userId}.jpeg`)

    return (

        <li className={[props.isTop ? styles.top : "", styles.normal].join(' ')}>
            <div className={styles.icon}>
                <img src={url.default} alt="" />
            </div>
            <div className={styles.detail}>
                <div className={styles.title}>
                    <div className={styles.username}>
                        {props.username}
                    </div>
                    <div className={styles.date}>
                        {props.date}
                    </div>
                </div>
                <div>
                    <div className={styles.lastMsg}>{props.lastMsg}</div>
                    {props.isRemind === false ? 
                        <div className={styles.remind}>
                            <i className="fa fa-bell-slash-o"></i>
                        </div>
                     : ''}
                </div>
            </div>
        </li>

    )

}

export default UserItem;
