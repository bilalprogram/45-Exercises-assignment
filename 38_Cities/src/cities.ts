// Cities: write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as karachi is in pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city:string , country:String = 'Default Country.'){

    console.log(` ${city} is in ${country}.`);
}

describe_city('Karachi','Pakistan');

describe_city('Delhi','India');

describe_city('London',);
