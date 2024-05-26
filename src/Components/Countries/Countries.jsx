import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountry = (country) => {
        console.log('add this to you visited country')
        console.log(country);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.ccs3} handleVisitedCountry={handleVisitedCountry} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;