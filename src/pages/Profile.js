import React, { useState } from 'react';
import ProfileText from '../components/profile/index';

export default function Profile() {

    const data= [
            {
                'img' : 'https://yt3.ggpht.com/a/AATXAJyn0DG9fJIWqiwHJUgh4izRyKyTADoiL24Z5A=s900-c-k-c0xffffffff-no-rj-mo',
                'nama' : 'George Miracle Theophylus',
                'nim' : 21120121140031
            },
            {
                'img' : 'https://th.bing.com/th/id/OIP.78B5oPqEkt8UcZS0u5ySUAHaFY?pid=ImgDet&rs=1',
                'nama' : 'Bima Abizard Nurqolbi',
                'nim' : 21120121140107
            },
            {
                'img' : 'https://th.bing.com/th/id/R.6f599460c4791d1a66c50de8c9523ae3?rik=tGIEuxocg3ZNmA&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f28200000%2fRomilda-Vane-gryffindor-28263128-2100-1400.jpg&ehk=uxTQBHmLjKffvpz1G%2fxfU6dCS6r5LiPv9xYkVKkxFpI%3d&risl=&pid=ImgRaw&r=0',
                'nama' : 'Vane Karenina Thetan Hartono',
                'nim' : 221120121120005
            },
            {
                'img' : 'https://data-corporate.abs-cbn.com/corp/medialibrary/dotcom/isd_cast/screen%20shot%202019-07-18%20at%205-16-23%20pm_2.png?ext=.png',
                'nama' : 'Jericho Nathanael Mangampu Hutapea ',
                'nim' : 21120121140160
            }
        ]

    return(
        <div className='profile-container'>
            {data.map((item, index) => {
                    return (
                        <ProfileText data={item} key={index}/>
                    );
                })}
        </div>
    )
}