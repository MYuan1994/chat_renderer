import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

import 'font-awesome/css/font-awesome.css'
import styles from './AppAside.module.css'

const {closeWin}=require('../ipcRender/renderer')


interface menuItem {
    href: string,
    id: string,
    name: string,
    icon: string
}

interface Props {
    menus: Array<menuItem>
}

let close=()=>{
    closeWin();
}

const AppAside: React.FC<Props> = (props) => {
    return (
        <aside>
            <menu className={styles.menu}>
                {
                    props.menus.map((item) => (
                        <li title={item.name}>
                            <Link to={item.href} >
                                <i className={item.icon}></i>
                            </Link>
                        </li>
                    ))
                }
            </menu>
            <menu className={styles.setting}>
                <li>
                    <i className="fa fa-id-badge"></i>
                </li>
                <li>
                    <i id="closeWin" onClick={close} className="fa fa-gear fa-spin"></i>
                </li>
            </menu>
        </aside>
    )
}

export default AppAside;