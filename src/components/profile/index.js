import React from 'react';
import './index.css';

export default function ProfileText({data}) {
    return (
        <div className='profile-card'>
            <img src={data.img} alt={data.nama} className='profile-img'/>
            <h1>{data.nama}</h1>
            <p className="profile-nim">{data.nim}</p>
        </div>
    )
}