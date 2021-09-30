
import React, { useEffect, useState } from "react";
import { Route, RouteComponentProps,useParams } from 'react-router-dom'

import MainHead from './MainHead'
import MainBody from './MainBody'
import MainInput from './MainInput'

import styles from './ChatDetail.module.css'


interface matchProps {
    chatId: string,
    username: string
}




const ChatDetail: React.FC<RouteComponentProps<matchProps>> = (props) => {

    let params=useParams();
    window.sessionStorage.setItem('curChat',JSON.stringify({chatId:props.match.params.chatId,username:props.match.params.username}))

    useEffect(()=>{
        // console.log(params)
    },[params])

    return (
        <main className={styles.main}>
            <MainHead nickname={props.match.params.username}></MainHead>
            <MainBody chatId={props.match.params.chatId}></MainBody>
        </main>
    )
}

export default ChatDetail;