import React from "react";

export default function Card(info) {

    // info.pic <= Hoshino
    var imageUrl = process.env.PUBLIC_URL + "/Assets/" + info.pic + ".png";
    var wideImageUrl = process.env.PUBLIC_URL + "/Assets/wide/" + info.pic + "Wide.png";
    return (

        <div>

            <div className="card">
                <img className="card-img" src={imageUrl} />


                <div className="text">
                    <div className="titleAndLinks">
                        <div className="links">
                            <p className="card-location"><i class="fa-solid fa-location-dot"></i> <a href={info.locationUrl} target="_blank">{info.location}</a></p>
                            <a className="google-link" href={info.googleMaps} target="_blank">View on Google Maps</a>
                        </div>
                        <h2 className="card-title">{info.title}</h2>
                    </div>
                    <img className="card-img-wide" src={wideImageUrl} />
                    <h3 className="card-day">{info.day}</h3>
                    <p className="card-description">{info.description}</p>
                </div>

            </div>
            <hr />
        </div>

    )
}