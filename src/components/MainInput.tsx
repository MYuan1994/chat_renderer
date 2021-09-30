import React, { useEffect, useState } from "react";

import styles from './MainInput.module.css'

interface Props {
    chatId: string
}

const MainInput: React.FC<Props> = () => {
    return (
        <>
            <div className={styles.inputArea}>
                <div className={styles.tools}>
                    <i className="fa fa-folder-open-o"></i>
                    <i className="fa fa-scissors fa-rotate-270"></i>
                    <i className="fa fa-video-camera"></i>
                    <i className="fa fa-file-text-o"></i>
                </div>
                <textarea name="" id="input_area"></textarea>
            </div>
            <div className={styles.btns}>
                <button id="send" className={styles.send}>
                    <i className="fa fa-send"> 发送</i>
                </button>
            </div>
        </>
    )
}

export default MainInput;