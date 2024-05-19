// write a function that stores information about a car in an object. The function should always receive a manufacturer and a model name.
//It should then accepts an arbitrary number of keyword arguments . Call the function with the requied information and two other name-value pairs , such as a color 
//or an optional feature. Print the object that's returned to make sure all the information was stored correctly.
import { features } from "process";

function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: { [key : string]: any } [] ):Object {

    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return carInfo;
};

let answare = storeCarInfo('Toyota', 'Corolla', {color:"black", year: "2019"}, {features: ['Navigation', 'Power window']});

console.log(answare);
