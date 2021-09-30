import React, { useEffect, useState } from "react";

import styles from './MainBody.module.css'
import 'font-awesome/css/font-awesome.css'


import {getChatRecords} from '../ipcRender/renderer'
import Record from './Record'
import MainInput from './MainInput'



interface Props{
    chatId:string
}


const MainBody:React.FC<Props>=(props)=>{
    let [chatRecords, setChatRecords] = useState<any>([]);

    useEffect(()=>{
        getChatRecords(props.chatId).then(res=>{
            setChatRecords(res)
        })
    },[props.chatId])


    document.querySelector('#send')?.addEventListener('click',(event)=>{
        event.stopPropagation()
        let textA=document.querySelector('#input_area') as HTMLTextAreaElement;
        alert(textA.value);
        // setChatRecords([...chatRecords,])
    })

    return (
        <div className={styles.body} id={props.chatId}>
            <div className={styles.chatDetail}>
                {chatRecords.map((record) => (
                    <Record date={record.date} msg={record.msg} userId={record.userId} status={record.status}></Record>
                ))}
            </div>
            <MainInput chatId={props.chatId}></MainInput>

        </div>
    )
}


export default MainBody;