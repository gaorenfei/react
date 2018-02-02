import React, { Component } from 'react';
import { Button } from 'antd';
class Page2 extends Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render(){
        return(
            <div>
                <Button type="dashed">第二页</Button>
                <Provice></Provice>
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