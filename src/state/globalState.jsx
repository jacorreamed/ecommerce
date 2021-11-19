import React, {useReducer,createContext} from 'react'

export const productContext = createContext();

const initialState = {
    shoppingCar:[]
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_PRODUCT':
            return {...state,shoppingCar:[...state.shoppingCar,action.product]}
        default:
            return state
    }
    
}


export const ProductContextProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState);

    return (
        <productContext.Provider value={[state,dispatch]}>
            {children}
        </productContext.Provider>
    )
}