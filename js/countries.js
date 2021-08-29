const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countries => {
    // for (cuntry of cuntries) {
    //     console.log(cuntry) }
    const cuntriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(cuntry);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick=loadcountryByname('${country.name}')>Details</button>
        `;
        /* const h3 = document.createElement('h3');
        h3.innerHTML = country.name;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerHTML = country.capital;
        div.appendChild(p); */
        cuntriesDiv.appendChild(div);
    })
}

const loadcountryByname = name => {
    // console.log(name)
    const url = `https://restcountries.eu/rest/v2/name/${name} `
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h5>${country.name}</h5>
            <p>${country.capital}</p>
            <p>${country.population}</p>
            <img width="200px" src="${country.flag}" alt="">
   
            `
}