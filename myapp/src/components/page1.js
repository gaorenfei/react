import React, { Component } from 'react';
import { Button } from 'antd';
export class Page1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
    componentDidMount(){
        console.log(this.props.location.state.name)
    }
    render(){
        return(
            <div>
                <Button type="dashed">首页</Button>
            </div>
        )
    }
}