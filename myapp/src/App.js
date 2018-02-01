import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import {Login} from './components/login'
// import axios from 'axios';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    // axios.post('/aaa').then(res=>{
    //     console.log(res);
    // })
  }
  goTset(){
    this.props.router.push({ pathname : '/content' })
    // window.location.hash='#/content';
  }
  render() {
    return (
      <div className="App">
        <header className="App-header aa">
          <img src={logo} className="App-logo" alt="logo" />
          <Login></Login>
        </header>
        <Button type="primary" onClick={this.goTset.bind(this)}>进入</Button>
      </div>
    );
  }
}

