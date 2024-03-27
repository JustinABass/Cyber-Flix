import React, {useState, useEffect} from "react";

const ListContext = React.createContext()

function ListProvider({ children }) {
    const [watchListItms, setWatchListItms ] = useState([])
    console.log('wlitms', watchListItms)




    return(
        <ListContext.Provider
        value={{ watchListItms, setWatchListItms }}>
            {children}
        </ListContext.Provider>
    )
}


export { ListContext, ListProvider}