import React, { useEffect, useState } from "react";

import styles from './MainHead.module.css'

interface Props{
    nickname:string
}


const MainHead:React.FC<Props>=(props)=>{
    return (
        <div className={styles.header}>
            <div className={styles.chatName}>{props.nickname}</div>
            <div className={styles.btns}></div>
        </div>
    )
}


export default MainHead;