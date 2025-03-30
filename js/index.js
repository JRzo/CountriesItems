let ulCountries = document.getElementById("countriesUL");
let ulCurrencies = document.getElementById("currenciesUL");

let submitButton = document.querySelector("input[type=button]");
submitButton.addEventListener("click", () =>{
    let value = document.querySelector("input[type=search]").value.toLowerCase();
    currency(value)
})


async function getContinent(language){

    try{
        const response = await fetch(`https://restcountries.com/v3.1/lang/${language}`);
        if(!response.ok){
            throw new Error("Error goes here");
        }
        // Will record the currencies name for each of the countries
        let currencies = []
    
        const data = await response.json();
        console.log(data);
        // Will create a new li for each of the countries of the language
        for(let i = 0; i < data.length; i++){
            let currentLi = document.createElement("li")
            currentLi.innerHTML = `Country: ${data[i].name['common']} | Region: ${data[i].subregion}`;
            ulCountries.appendChild(currentLi);
            currencies.push(Object.keys(data[i].currencies)[0])
        }
        return currencies
    }
    catch(error){
        console.log(error)
    }
}




async function currency(language){
    let currencies = await getContinent(language);


    console.log(currencies)
    try{
        const response = await fetch("https://v6.exchangerate-api.com/v6/adb1b302cbd89259faad4559/latest/USD");
        if(!response.ok){
            throw new Error("No resources found")
        }
        const data = await response.json();
        console.log(data);
        for(let i of currencies){
            let currentLI = document.createElement("li");
            currentLI.innerHTML = `1USD => ${data.conversion_rates[i]}`
            ulCurrencies.appendChild(currentLI);
        }
        return data;
    }
    catch(error){
        console.log(error);
    }

}


