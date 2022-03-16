
const searchInput = document.querySelector('#searchCountry');
const searchBTN = document.querySelector('#searchBTN');
const Country = document.querySelector('h2');
const activeCases = document.querySelector('.activeCases label');
const criticalCases = document.querySelector('.criticalCases label');
const totalRecovered = document.querySelector('.totalRecovered label');
const totalDeaths = document.querySelector('.totalDeaths label');
const totalCases = document.querySelector('.totalCases label');


const trackCovid = (country) => {
  
  let url = `https://coronavirus-19-api.herokuapp.com/countries/${country}`;
  
  if (country === 'South Korea' || country === 'Korea') {

    country = 'S. Korea';
    url = `https://coronavirus-19-api.herokuapp.com/countries/${country}`;
    
  }
  
  fetch(url)
  .then(response => response.json())
  .then(data => {

    Country.textContent = `${data.country}`;
    activeCases.textContent = `${data.active}`;
    criticalCases.textContent = `${data.critical}`;
    totalRecovered.textContent = `${data.recovered}`;
    totalDeaths.textContent = `${data.deaths}`;
    totalCases.textContent = `${data.cases}`;

  })
  .catch(error => console.log("An Error Occured!"))

}

searchBTN.addEventListener('click', () => {
  
  trackCovid(searchInput.value);

});
