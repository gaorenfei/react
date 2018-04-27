import React, { Component } from 'react';
import { Button } from 'antd';

import _ from 'lodash';
class Page2 extends Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    componentDidMount(){
        //按长度分割
        console.log(_.chunk(['a', 'b', 'c', 'd'],3))
        //去除判断条件为false的
        console.log(_.compact([0, 1, false, 2, '', 3, 7, 7.5, 'gggg', true, false,NaN, undefined]))
        //返回第一个数组与后一个数组不相同的值
        console.log(_.difference([2, 5, 6, 4,9], [4, 2,7,8,9]))
        //得到从结尾处开始删除后的数组默认1
        console.log(_.dropRight([1, 2, 3,4,5,6,7,8,9], 5))
        //默认从头开始删除默认1
        console.log(_.drop([1, 2, 3],1))
    }
    render(){
        return(
            <div>
                <Button type="dashed">第二页</Button>
                {/* <Provice></Provice> */}
                <div></div>
            </div>
        )
    }
}

export default Page2

class Provice extends Component{
    constructor(props){
        super(props);
        this.state={
            province : [
                {"code":"beijing","cn":"北京"},
                {"code":"shanghai","cn":"上海"},
                {"code":"tianjin","cn":"天津"},
                {"code":"chongqing","cn":"重庆"},
                {"code":"hebei","cn":"河北"},
                {"code":"shanxi","cn":"山西"},
                {"code":"henan","cn":"河南"},
                {"code":"liaoning","cn":"辽宁"},
                {"code":"jilin","cn":"吉林"},
                {"code":"heilongjiang","cn":"黑龙江"},
                {"code":"neimenggu","cn":"内蒙古"},
                {"code":"jiangsu","cn":"江苏"},
                {"code":"shandong","cn":"山东"},
                {"code":"anhui","cn":"安徽"},
                {"code":"zhejiang","cn":"浙江"},
                {"code":"fujian","cn":"福建"},
                {"code":"hubei","cn":"湖北"},
                {"code":"hunan","cn":"湖南"},
                {"code":"guangdong","cn":"广东"},
                {"code":"guangxi","cn":"广西"},
                {"code":"jiangxi","cn":"江西"},
                {"code":"sichuan" ,"cn":"四川"},
                {"code":"hainan","cn":"海南"},
                {"code":"guizhou","cn":"贵州"},
                {"code":"yunnan","cn":"云南"},
                {"code":"xizang","cn":"西藏"},
                {"code":"shaanxi","cn":"陕西"},
                {"code":"gansu","cn":"甘肃"},
                {"code":"qinghai","cn":"青海"},
                {"code":"ningxia","cn":"宁夏"},
                {"code":"xinjiang","cn":"新疆"}
            ]
        }
    }
    
    render(){
        return(
            <div>
                {
                    this.state.province.map((data)=>{
                        return <div value={data.code} key={data.code} >{data.cn}</div>
                    })
                }
            </div>
        )
    }
}
