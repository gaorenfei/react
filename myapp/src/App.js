import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import {Login} from './components/login'
import axios from 'axios';

export class App extends Component {
  componentDidMount(){
    // axios.post('/aaa').then(res=>{
    //     console.log(res);
    // })
  }
  goTset(){
    window.location.hash='#/content';
  }
  render() {
    return (
      <div className="App">
        <header className="App-header aa">
          <img src={logo} className="App-logo" alt="logo" />
          <Login></Login>
        </header>
        <Button type="primary" onClick={this.goTset}>进入</Button>
      </div>
    );
  }
}

