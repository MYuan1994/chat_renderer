import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';

import {ChatRoom,Contacts,Favorites,FileManager,Tasks } from '../pages/index'
import AppList from './AppList';


interface Props {
    // menu: string
}

const AppArticle: React.FC<Props> = (props) => {
    return (
        <article>
            <Switch>
                <Route exact path="/" component={ChatRoom}></Route>
                <Route path="/contacts" component={Contacts}></Route>
                <Route path="/favorites" component={Favorites}></Route>
                <Route path="/fileManager" component={FileManager}></Route>
                <Route path="/tasks" component={Tasks}></Route>
                <Route path="/appList" component={AppList}></Route>
                <Route render={()=>404} />
            </Switch>
        </article>
    )
}

export default AppArticle;