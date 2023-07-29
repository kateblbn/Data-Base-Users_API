import React, { createContext, useEffect, useState } from 'react'

export const ContextApiData = createContext();

function ContextApi(props) {
    const [data, setData] = useState([])
    const link = 'https://jsonplaceholder.typicode.com/users';
    useEffect(() => {
        try {
            const user = async () => {
                await fetch(link, {
                    method: 'get'
                })
                    .then(responce => responce.json())
                    .then(json => setData(json))
            }
            user()
        } catch (error) {
            console.log('Errors');
        }
    }, [])
    const res = { data }
    return (
        <div><ContextApiData.Provider value={res}>{props.children}</ContextApiData.Provider></div>
    )
}

export default ContextApi