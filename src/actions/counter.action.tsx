export const counterTypes = {
    increment: 'INCREMENT',
    decrement: 'DECREMENT',
}

export const increment = (amount: number) => {

    return {
        payload: {  
            count: amount
        },
        type: counterTypes.increment
    }
}

export const decrement = (amount: number) => {

    return {
        payload: {
            count: amount
        },
        type: counterTypes.decrement
    }
}