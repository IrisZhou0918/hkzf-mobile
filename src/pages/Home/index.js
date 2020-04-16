import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Index from './Index/index.js'
import House from './House'
import News from './News'
import Profile from './Profile'
import NoMatch from '../NoMatch'

import './index.scss'

import { TabBar } from 'antd-mobile'

const tabs = [
  {
    title: '首页',
    icon: 'icon-ind',
    path: '/home',
  },
  {
    title: '找房',
    icon: 'icon-findHouse',
    path: '/home/house',
  },
  {
    title: '资讯',
    icon: 'icon-infom',
    path: '/home/news',
  },
  {
    title: '个人中心',
    icon: 'icon-my',
    path: '/home/profile',
  },
]

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: this.props.location.pathname,
    }
  }
  render() {
    return (
      <div className="home">
        <Switch>
          <Route exact path="/home" component={Index}></Route>
          <Route path="/home/house" component={House}></Route>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/profile" component={Profile}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
        <div className="tabBar">
          <TabBar
            unselectedTintColor="#333"
            tintColor="#21b97a"
            barTintColor="#fff"
          >
            {tabs.map((item) => (
              <TabBar.Item
                title={item.title}
                key={item.title}
                icon={<span className={`iconfont ${item.icon}`}></span>}
                selectedIcon={<span className={`iconfont ${item.icon}`}></span>}
                selected={this.state.selectedTab === item.path}
                onPress={() => {
                  this.setState({
                    selectedTab: item.path,
                  })
                  this.props.history.push(item.path)
                }}
              >
              </TabBar.Item>
            ))}
          </TabBar>
        </div>
      </div>
    )
  }
}

export default Home