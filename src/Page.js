import React from 'react';
import Navbar from './Components/navbar'
import Card from './Components/cards';
import data from './Components/data';

export default function Page() {
    const card = data.map(
        cardInfo => <Card
            pic={cardInfo.image}
            location={cardInfo.location}
            locationUrl={cardInfo.locationUrl}
            googleMaps={cardInfo.googleMapsUrl}
            title={cardInfo.title}
            day={cardInfo.Day}
            description={cardInfo.description}

        />
    )
    return (
        <div className='page'>
            <Navbar />
            <div className='hero'>
                {card}
            </div>

        </div>
    )
}