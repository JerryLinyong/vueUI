import React, { Component } from 'react';
import { Bar } from 'ant-design-pro/lib/Charts';
import { Menu } from 'antd';
import { Badge } from 'antd';


class App extends Component {
  constructor () {
    super()
    this.state = {
      users: [{title:'今日活跃用户',number:'123'},{title:'昨日活跃用户',number:'123'},{title:'客服账号',number:'123'}],
      infos: [{title:'总消息数量',number:'1321',week:'11',day:'12',other:{title:'近一周消息平均数',count:'12'}},{title:'有效会话',number:'1321',week:'11',day:'12',other:{title:'近一周有效会话',count:'12'}},{title:'投诉数量',number:'1321',week:'11',day:'12',other:{title:'近一周投诉',count:'12'}},{title:'客服在线时长',number:'1321',week:'11',day:'12',other:{title:'',count:''}},{title:'新用户增加数量',number:'1321',week:'11',day:'12',other:{title:'日均销售额￥',count:'12'}},{title:'老用户增加数量',number:'1321',week:'11',day:'12',other:{title:'日均销售额￥',count:'41213'}}],
      rates: [{rating: '1', name: 'ninja', count: '11321'},{rating: '2', name: 'ninja', count: '11321'},{rating: '3', name: 'ninja', count: '11321'},{rating: '4', name: 'ninja', count: '11321'},{rating: '4', name: 'ninja', count: '11321'},{rating: '4', name: 'ninja', count: '11321'},{rating: '4', name: 'ninja', count: '11321'},{rating: '4', name: 'ninja', count: '11321'},{rating: '4', name: 'ninja', count: '11321'},{rating: '4', name: 'ninja', count: '11321'}]
    }
  }
  render() {
    const SubMenu = Menu.SubMenu;
    const salesData = [];
    for (let i = 0; i < 12; i += 1) {
      salesData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200,
      });
    }
    let userInfo = this.state.users.map(user=>{
      return (
        <div className="col s4 z-depth-1 hoverable" key={user.title}>
          <h6  className="grey-text text-darken-1">{user.title}</h6>
          <h4>{user.number}</h4>
        </div>
      )
    })
    let infos = this.state.infos.map(info=>{
      return (
        <div className="col s3 hoverable" key={info.title}>
          <h6  className="grey-text text-darken-1">{info.title}</h6>
          <h4>{info.number}</h4>
          <h6>周同比&nbsp;{info.week}%&nbsp;&nbsp;日同比&nbsp;{info.day}%</h6>
          <h6>{info.other.title}&nbsp;{info.other.count}</h6>
        </div>    
      )
    })
    let rates = this.state.rates.map(rate=>{
      if (rate.rating <= 3) {
        return <div style={{display:'flex',justifyContent:'space-around',padding: '5px'}} key={rate.rating} className='hoverable valign-wrapper'>
          <Badge count={rate.rating}></Badge>
          <h6>{rate.name}</h6>
          <h6>{rate.count}</h6>
        </div> 
      } else {
        return <div style={{display:'flex',justifyContent:'space-around',padding: '5px'}} key={rate.rating} className='hoverable valign-wrapper'>
          <Badge count={rate.rating} style={{ backgroundColor: '#108ee9' }}></Badge>
          <h6>{rate.name}</h6>
          <h6>{rate.count}</h6>
        </div> 
      }
    })
    return (
      <div className="App">
        <div className="row center-align">
        {userInfo}
        {infos}
        </div>
        <div className='allInfo'>
          <div className='infoTable'>
            <Menu
            onClick={this.handleClick}
            selectedKeys={this.state.current}
            mode="horizontal" className='valign-wrapper'
            >
              <SubMenu title={<span className="submenu-title-wrapper btn z-depth-2 blue darken-1">新用户</span>}>
              </SubMenu>
              <SubMenu title={<span className="submenu-title-wrapper btn z-depth-2 blue darken-1">老用户</span>}>
              </SubMenu>
              <SubMenu title={<span className="submenu-title-wrapper btn z-depth-3 blue darken-1">选择客服账号</span>}>
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </SubMenu>
            </Menu>
            <h6 style={{marginTop:'20px'}}>销售额趋势</h6>
            <Bar
              height={300}
              data={salesData}
            />
          </div>
          <div className='infoList'>
            <h6 style={{marginBottom: '20px'}}>客服接待用户数量排行榜</h6>
            {rates}
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
