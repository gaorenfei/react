import axios from 'axios';
//中间件异步方法
export const editTest = (isRequest) =>(dispatch, getState)=> {
        if(getState().common.isRequest === isRequest){
            return
        }
        let action ={
            type:'USER_ID_REQUEST',
            isRequest:isRequest
        }
        dispatch(action);
        axios.post('/aaa').then(res=>{
            let action = {
                type: 'USER_ID_SUCESS',
                params: res.data
            }
            dispatch(action);
        }).catch(res=>{
            let action = {
                type: 'USER_ID_ERROR',
                params: '获取数据失败',
                isRequest:false
            }
            dispatch(action);
        })
}