import * as actionTypes from '../actions'

const intialState = {
    counter: 0,
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
                    };
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
                    };
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + 10
                    };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - 15
                    };

            
            
        default:
            return state
    }
    
    // if (action.type === 'INCREMENT') {
    //     return {
    //         counter: state.counter + 1
    //     };
    // }
    // if (action.type === 'DECREMENT') {
    //     return {
    //         counter: state.counter - 1
    //     };
    // }
    // if (action.type === 'ADD') {
    //     return {
    //         counter: state.counter + action.val
    //     };
    // }
    // if (action.type === 'SUBTRACT') {
    //     return {
    //         counter: state.counter - action.val
    //     };
    // }

    // DECREMENT
    // ADD
    // SUBTRACT
    
}

export default reducer