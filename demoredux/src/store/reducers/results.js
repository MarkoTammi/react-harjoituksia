import * as actionTypes from '../../store/actions'

const initalState = {
    results: []
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // id on concat'n "key" jona käytetään aikaleimaa
            return {...state, results: state.results.concat({id: new Date(), value: action.result})}
        case actionTypes.DELETE_RESULT:
            return {...state, results: state.results.filter(result => result.id !== action.resultElementId)}
    }

    return state
}

export default reducer
