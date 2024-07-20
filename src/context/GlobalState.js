import { createContext,useReducer } from "react";
import AppReducer from "./AppReducer";
import React from 'react'

const initialState={
    transaction: []
}
export const GlobalContext = createContext(initialState);

export const GlobalStateProvider=({children})=>{

    const [state,dispatch]=useReducer(AppReducer,initialState);

    const deleteTransaction=(id)=>{
        dispatch({
            type: "Delete_Transaction",
            payload:id
        })
    }
    const addTransaction=(transaction)=>{
        dispatch({
            type: "Add_Transaction",
            payload:transaction
        })
    }
    return <GlobalContext.Provider value={{transactions:state.transaction,deleteTransaction,addTransaction}}>
        {children}
    </GlobalContext.Provider>
}
