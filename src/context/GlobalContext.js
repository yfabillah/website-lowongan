import React, { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
    const [ word, setWord ] = useState("Halo, saya state 1 dari context")
    const [ number, setNumber ] = useState("Halo, saya state 2 dari context")

    return (
        <GlobalContext.Provider value={
            {
                word,
                setWord,
                number,
                setNumber
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}