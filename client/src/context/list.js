import React, {useState, useEffect} from "react";

const ListContext = React.createContext()

function ListProvider({ children }) {

    const [lists, setLists ] = useState([])
console.log('lists', lists)

    useEffect(() => {
        fetch('/lists')
        .then((r) => r.json())
        .then((list) => {
            setLists(list)
        })
    }, [])



    function addToUserList(newListItm, user, setUser){
        fetch('/lists',{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(newListItm)
        })
        .then((r) => r.json())
        .then((newLItm) => {

            console.log('new item', newLItm)

            const ObjExist = user.lists.find((item) => item.movie_id === newLItm.movie_id)
            console.log('copy', ObjExist)

            if( ObjExist ){
                const removeWatchListDuplicates = user.lists.filter((item, index) => user.lists.indexOf(item) === index)
                // const updateUserWatchList = [...user.lists, removeWatchListDuplicates]
                const updateUser = {...user, lists: removeWatchListDuplicates}
                setUser(updateUser)
            } else {
                const updateUserWatchList = [...user.lists, newLItm]
                const updateUser = {...user, lists: updateUserWatchList}
                setUser(updateUser)
            }
        })
    }

    return(
        <ListContext.Provider
        value={{  addToUserList }}>
            {children}
        </ListContext.Provider>
    )
}


export { ListContext, ListProvider}