import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.Country)
    const { flag, name, capital, population } = props.country
    return (
        <div className="country bg-dark">
            <h2>Name : {name}</h2>
            <img src={flag} alt="" />
            <h2>Capital : {capital}</h2>
            <h2>Population : {population}</h2>
        </div>
    );
};

export default Country;