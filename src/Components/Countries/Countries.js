import React, { useEffect, useState } from 'react';
import './Countries.css'
import '../Country/Country'
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    },[])
    return (
        <div className='country-container'>
            {
                countries.map(country => <Country country = {country} name = {country.name} key={country.cca3}></Country>)
            }
        </div>
    );
};
export default Countries;