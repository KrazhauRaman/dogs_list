// here will be a card of 1 breed for list

import React from 'react';

import { Link } from "react-router-dom";

const picStyle = {
        width: '150px',
        height: '150px',
};

const BreedCard = ({ name, picUrl }) =>

        <div className="BreedCard">
                <h1>{name}</h1>
                <Link to={`/breed-page/${name}`}><img style={picStyle} src={picUrl} alt="Dog" /></Link>
        </div>


export default BreedCard;