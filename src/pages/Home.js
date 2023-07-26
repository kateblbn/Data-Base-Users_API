import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './main.css'

function Template({name, id}) {
    return (
        <div className='link__names'>
            <Link className='link__name' to={`/users/${id}`}>{name}
            </Link>
        </div>
    )
}
function Home() {
    const [data, setData] = useState([])
    const link = 'https://jsonplaceholder.typicode.com/users';
    useEffect( () => {
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
    const getData = data.map((el, i) => {
        return <Template name={el.name} id={el.id}/>
    })
    console.log(data);
  return (
    <div className='link'>
        <div className='link__title title'>DATA BASE</div>
        {getData}
    </div>
  )
}

export default Home