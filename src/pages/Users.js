import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import './main.css'
import { ContextApiData } from '../context/ContextApi';

function TemplateInfo({ usName, email, website, phone, address, city, suite }) {
    return (
        <div>
            <p className='title'>INFO</p>
            <p className='info__name'>Name: <span>{usName}</span></p>
            <a className='info__email' href={email}>Email: <span>{email}</span></a>
            <p className='info__website'>Website: <a href={website}>{website}</a> </p>
            <p className='info__phone'>Phone: {phone}</p>
            <p className='info__city'>Address: {city}, <span> Street: {address},</span> <span>{suite}</span></p>

        </div>
    )
}
function Users() {
    const { id } = useParams();
    const number = Number(id);
    const { data } = useContext(ContextApiData)

    const filterUsers = data.filter((el) => el.id === number)
    console.log(filterUsers);
    const result = filterUsers.map((el, i) => {
        return <TemplateInfo usName={el.name} email={el.email}
            website={el.website} phone={el.phone} address={el.address.street} city={el.address.city} suite={el.address.suite} />
    })
    console.log(result);
    return (
        <div>
            <div className='info'>{result}</div>
        </div>
    )
}

export default Users