"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answare = storeCarInfo('Toyota', 'Corolla', { color: "black", year: "2019" }, { features: ['Navigation', 'Power window'] });
console.log(answare);
