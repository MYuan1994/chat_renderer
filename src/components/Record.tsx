import React, { useEffect, useState } from "react";
import styles from './Record.module.css'


interface RecordProps {
    date: string,
    msg: string,
    userId?: string,
    status?: number,
    type?: string
}

const Record: React.FC<RecordProps> = (props) => {
    let url;
    if(props.userId){
        url=require(`./../img/${props.userId}.jpeg`)
    }

    return (
        <div className={[styles.record,props.userId ? styles.other : styles.mine,].join(' ')}>
            <div className={styles.icon}>
                {url?<img src={url.default} alt="" />:<text>🥸</text>}
            </div>            
            <div className={styles.msg} dangerouslySetInnerHTML={{ __html: props.msg }}>
            </div>
            {
                props.status
                ?
                    <div className={styles.status}>
                        <i className={props.status===1?'fa fa-spinner fa-spin':'fa fa-exclamation-circle'}></i>
                    </div>
                :   
                    ''
            }
            
        </div>
    )
}

export default Record;