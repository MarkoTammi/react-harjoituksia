import * as actionTypes from '../../store/actions'

const initalState = {
    counter: 0,
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {...state, counter: state.counter + 1}
        case actionTypes.MIINUS4:
            return {...state, counter: state.counter - action.value}
        case actionTypes.ADD5:
            return {...state, counter: state.counter + action.value}
        case actionTypes.DECREMENT:
            return {...state, counter: state.counter - 1}
    }

    return state
}

export default reducer
