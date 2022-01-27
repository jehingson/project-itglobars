import React, { useState } from 'react';

const Context = React.createContext({})

export function TravelcontextProvider({ children }) {
    const [travel, setTravel] = useState([])

    return <Context.Provider value={{ travel, setTravel }}>
        {children}
    </Context.Provider>;
}

export default Context;
