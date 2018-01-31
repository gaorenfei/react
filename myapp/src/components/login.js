import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import axios from 'axios'

// @connect(
// 	state=>({
// 		// showModal:state.common.showModal
// 	}),
// 	dispatch=>({
// 		// comactions:bindActionCreators(comActions,dispatch)
// 	})
// )

export class Login extends Component{
	constructor(props){
		super(props);
		this.state={

		};
	}
	render(){
		return(
		<div className="head-container">
			<div className="inner-nav">
    	    	<div className="nav-container">
	    			<div className="nav-title">
	    				{'您好！欢迎来到测试react项目'}
	    			</div>
    	    	</div>
    	    </div>
    	    <div className="inner-logo">
    	    	<p className="logo-title">{'demo'}</p>
    	    </div>
    	</div>
		);
	}
}  
