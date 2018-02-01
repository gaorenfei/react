const initState = {
    test: '123456789'
};

const actDefault = (state) => state;


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
        default:
            return actDefault(state, action);
    }
};

export default reducerCommon;