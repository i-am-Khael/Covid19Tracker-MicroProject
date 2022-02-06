
const country = document.querySelector('.country-ph > h1');
const activeCases = document.querySelector('.covid-cases-ph > .active-cases > div > label');
const criticalCases = document.querySelector('.covid-cases-ph > .critical-cases > div > label');
const totalRecovered = document.querySelector('.covid-cases-ph > .total-recovered > div > label');
const totalDeaths = document.querySelector('.covid-cases-ph > .total-deaths > div > label');
const totalCases = document.querySelector('.covid-cases-ph > .total-cases > div > label');

const countryJPN = document.querySelector('.country-jpn > h1');
const activeCasesJPN = document.querySelector('.covid-cases-jp > .active-cases > div > label');
const criticalCasesJPN = document.querySelector('.covid-cases-jp > .critical-cases > div > label');
const totalRecoveredJPN = document.querySelector('.covid-cases-jp > .total-recovered > div > label');
const totalDeathsJPN = document.querySelector('.covid-cases-jp > .total-deaths > div > label');
const totalCasesJPN = document.querySelector('.covid-cases-jp > .total-cases > div > label');


fetch('https://coronavirus-19-api.herokuapp.com/countries/philippines')
  .then(response => response.json())
  .then(data => {
    country.textContent = `${data.country}`;
    activeCases.textContent = `${data.active}`;
    criticalCases.textContent = `${data.critical}`;
    totalRecovered.textContent = `${data.recovered}`;
    totalDeaths.textContent = `${data.deaths}`;
    totalCases.textContent = `${data.cases}`;
  })
  .catch(error => console.log(`ERROR: ${error}`));
  
  fetch('https://coronavirus-19-api.herokuapp.com/countries/japan')
  .then(response => response.json())
  .then(data => {
    countryJPN.textContent = `${data.country}`;
    activeCasesJPN.textContent = `${data.active}`;
    criticalCasesJPN.textContent = `${data.critical}`;
    totalRecoveredJPN.textContent = `${data.recovered}`;
    totalDeathsJPN.textContent = `${data.deaths}`;
    totalCasesJPN.textContent = `${data.cases}`;
  })
  .catch(error => console.log(`ERROR: ${error}`));
