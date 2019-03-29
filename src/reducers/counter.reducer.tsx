import { counterState } from ".";


const initialState: counterState = {
    count: 0
}

export const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.payload.count
            }
        case 'DECREMENT':
            return {
                count: state.count - action.payload.count
            }
        default:
            return state
    }
}