const initState = {
    test: '123456789',
    isRequest:false
};

// const actDefault = (state) => state;


//根据action修改state上的值
const testAdd = (state, action) => {
    const { params } = action;
    return Object.assign({}, state, {
        test: params,
    });
};

const reducerCommon = (state = initState, action) => {
    switch (action.type) {
        case 'EDIT_TEST':
            return testAdd(state, action);
        case 'USER_ID_REQUEST':
            return Object.assign({}, state, {
                isRequest: action.isRequest,
            });
        case 'USER_ID_SUCESS':
            return Object.assign({}, state, {
                test: action.params,
            });
        case 'USER_ID_ERROR':
            return Object.assign({}, state, {
                test: action.params,
                isRequest: action.isRequest
            });
        default:
            return state;
    }
};

export default reducerCommon;