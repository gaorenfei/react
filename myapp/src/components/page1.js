import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as comActions from '../action/index';

// 修饰器写法
@connect(
	state=>({
		test: state.common.test
	}),
	dispatch=>({
		onIncrement:bindActionCreators(comActions,dispatch)
	})
)

export class Page1 extends Component {
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

//推荐写法
// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         test: state.common.test
//     };
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         onIncrement: () => dispatch(comActions.editTest)
//     };
// }

// const mapDispatchToProps = (dispatch) =>{
//     return bindActionCreators(comActions,dispatch)
// }


// export default Page1 = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Page1);