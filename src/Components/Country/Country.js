import React from 'react';
import './Country.css'
import '../Countries/Countries'

const Country = (props) => {
    console.log(props);
    const {name, area, flags} = props.country;
    return (
        <div className='container'>
            <div className='country'>
                <h2>{name.common}</h2>
                <h4>{area}</h4>
                <img src={flags.png} alt="" />
            </div>
        </div>
    );
};

export default Country;