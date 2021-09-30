
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

import ChatDetail from '../../components/ChatDetail';
import UserList from '../../components/UserList';

import styles from './ChatRoom.module.css';

import {queryChatList} from '../../ipcRender/renderer'

interface Props {
    // menu: string
}

let chatList = []


const ChatRoom: React.FC<Props> = (props) => {
    let curChat = window.sessionStorage.getItem('curChat');
    let cur;
    if (curChat !== null) {
        cur = JSON.parse(curChat)
    }

    const [chatList, setChatList] = useState<any>([]);


    useEffect(()=>{
        let getList=async()=>{
            setChatList( await queryChatList());
        }

        getList()
    },[])
    return (
        <div className={styles.chatRooms}>
            <Router>
                <UserList list={chatList}></UserList>
                <Switch>
                    {/* if(cur){
                        <Redirect path="/" to={`/detail/:${cur.chatId}/:${cur.username}`} />
                    } */}
                    <Route path="/detail/:chatId/:username" component={ChatDetail} />
                </Switch>
            </Router>
        </div>
    )
}

export default ChatRoom;