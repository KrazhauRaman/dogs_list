// here will be a card of 1 breed for list

import React from 'react';

import { Link } from "react-router-dom";

const picStyle = {
        width: '180px',
        height: '180px',
        paddingTop: '20px',
        borderRadius: '50%',
};

const breedCardStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '200px',
        height: '300px',
        border: '1px solid rgb(217, 255, 102)',
        padding: '0px 20px 0px 20px',
        margin: '15px 15px 15px 15px',
        borderRadius: '10%',
        backgroundColor: 'rgb(242, 255, 204)',
        boxShadow: '0 0 25px rgba(0, 102, 0, 1)'

};

const headerStyle = {
        margin: 0,
        paddingTop: '20px',
        color: 'black',
        textAlign:  'center'
};

const BreedCard = ({ id, name, picUrl }) =>

        <Link to={`/breed-page/${id}`}>
                <div style={breedCardStyle} className="BreedCard">
                        <h3 style={headerStyle}>{name}</h3>
                        <img style={picStyle} src={picUrl} alt="Dog" />
                </div>
        </Link>


export default BreedCard;