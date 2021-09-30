import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import styles from './App.module.css'
// import Route  from ''

import AppAside from './layout/AppAside'
import AppArticle from './layout/AppArticle'


interface Props { }
interface State {
  products: any
}

const App: React.FC = (Props) => {

  const menus=[
    {
      href:"/",
      id:"menu_001",
      name:"近期会话",
      icon:"fa fa-comment-o"
    },
    {
      href:"/contacts",
      id:"menu_002",
      name:"联系人",
      icon:"fa fa-address-book-o"
    },
    {
      href:"/favorites",
      id:"menu_003",
      name:"收藏夹",
      icon:"fa fa-cube"
    },
    {
      href:"/fileManager",
      id:"menu_004",
      name:"文件管理",
      icon:"fa fa-folder-open-o"
    },
    {
      href:"/tasks",
      id:"menu_005",
      name:"待办任务",
      icon:"fa fa-tasks"
    },
    {
      href:"/appList",
      id:"menu_006",
      name:"APP",
      icon:"fa fa-th-large"
    }
  ]

  return (
    <div className={styles.app}>
      <Router>
        <img src="./img/1.jpeg" alt="" />
        <AppAside menus={menus}></AppAside>
        <AppArticle></AppArticle>
      </Router>

    </div>
  );


}

export default App;
