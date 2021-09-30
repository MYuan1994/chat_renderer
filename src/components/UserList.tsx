import React, { useEffect, useState } from "react";
import {  Link } from 'react-router-dom'


import styles from './UserList.module.css'

import UserItem from './UserItem'


interface Props {
    list: Array<Chat>
}

interface Chat {
    chatId: string,
    user: User,
    date:string,
    lastMsg:string,
    isRemind?:boolean,
    isTop?:boolean
}

interface User {
    id: string,
    username: string,
    // icon:ImageBitmap
}


const UserList: React.FC<Props> = (props) => {
    return (
        <div className={styles.chatRoom}>
            <div className={styles.search}>
                {/* <input type="text" /> */}
            </div>
            <ul className={styles.chats}>
                {
                    props.list.map((item) => (
                        <Link to={`/detail/${item.chatId}/${item.user.username}`}>
                            <UserItem key={item.chatId}
                                chatId={item.chatId} userId={item.user.id} username={item.user.username} lastMsg={item.lastMsg}
                                 date={item.date} isRemind={item.isRemind===false?item.isRemind:true} isTop={item.isTop?item.isTop:false}
                            />
                        </Link>
                    ))
                }
            </ul>
        </div>

    )
}

export default UserList;