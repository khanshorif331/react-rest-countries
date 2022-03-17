import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area,region,population,name,flags} = props.country
    // console.log(props.country);
    return (
        <div className='country bg-success'  data-aos="flip-left">
            <h1>{name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;