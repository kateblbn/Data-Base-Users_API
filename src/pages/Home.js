import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './main.css'
import { ContextApiData } from '../context/ContextApi';

function Template({ name, id }) {
    return (
        <div className='link__names'>
            <Link className='link__name' to={`/users/${id}`}>{name}
            </Link>
        </div>
    )
}
function Home() {
    const { data } = useContext(ContextApiData)

    const getData = data.map((el, i) => {
        return <Template name={el.name} id={el.id} />
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