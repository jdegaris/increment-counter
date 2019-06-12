import * as actionTypes from '../actions'

const intialState = {
    results: [],
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
     
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
        // const id = 2;
        // const newArr = [...state.results]
        // newArr.splice(id,1)
        const updatedArray = state.results.filter(result => result.id !== action.resultElId)
        return {
            ...state,
            // results: newArr
            results: updatedArray
        }
            
            
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