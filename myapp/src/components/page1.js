import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as comActions from '../action/index';

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
const mapStateToProps = (state) => {
    console.log(state)
    return {
        test: state.common.test
    };
}
console.log(mapStateToProps())

// 哪些 action 创建函数是我们想要通过 props 获取的？
const mapDispatchToProps = (dispatch) =>{
    return {
        onIncrement: () => dispatch(comActions.editTest)
    };
}
// const mapDispatchToProps = (dispatch) =>{
//     return bindActionCreators(comActions,dispatch)
// }

// 修饰器写法
// @connect(
// 	state=>({
// 		test: state.common.test
// 	}),
// 	dispatch=>({
// 		onIncrement:bindActionCreators(comActions,dispatch)
// 	})
// )
class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: this.props.test
        };
    }
    componentDidMount() {
        //获取路由传递的参数
        // console.log(this.props.location.state.name)
    }
    render() {
        return (
            <div>
                首页
                <Button type="dashed">修改</Button>
                {this.state.test}
            </div>
        )
    }
}


export default Page1 = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page1);