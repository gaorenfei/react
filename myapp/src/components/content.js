import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import logo from '../logo.svg';
import { Link } from 'react-router';
const { Header, Sider, Content } = Layout;

export class Contents extends Component {
  constructor(props, context) {
    super(props, context);
    // console.log(this.context.router)
    this.state = {
      collapsed: true,
      aa:1
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    },()=>{
      console.log(this.state.collapsed)
    });
  }
  componentDidMount(){
  //  console.log(this.context.router)
  }
  shouldComponentUpdate(nextProps, nextState){
    // console.log(nextProps);
    // console.log(nextState);
    // if(nextState.aa === this.state.aa){
    //   return false
    // }
    return true
  }
  goTwoPage(){
    console.log(666666666666666)
  }
  render() {
    return (
      <div id='components-layout-demo-custom-trigger'>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo"><img src={logo} className="App-logo" alt="logo" /></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user"/>
                <span>首页</span>
                <Link to={{ pathname : '/content/page1' , state : { name : 'sunny' }}}></Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>第二页</span>
                <Link to="/content/page2"></Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 830 }}>
                {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

//上下文，可以使用redux管理状态
Contents.contextTypes = {
  // router: Object
}
