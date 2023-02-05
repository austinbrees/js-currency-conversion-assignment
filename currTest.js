

 /*let exchange_rate = {
    "BRL": 0.18,
    "GBP": 1.13,
    "JPY": 0.0071,
    "MAD": 0.091,
    "NZD": 0.6,
    "USD": 0.92,
    "EUR": 1
}

let keys = Object.keys(exchange_rate)


console.log(keys)
*/

let exchange = (from, to, value) => {
    let result = 0
    const exchangeRate = {
        "BRL": 0.18,
        "GBP": 1.13,
        "JPY": 0.0071,
        "MAD": 0.091,
        "NZD": 0.6,
        "USD": 0.92,
        "EUR": 1
    }
        if (to in exchangeRate){
            if (to == "EUR"){
                result = value * exchangeRate[from]
                return result
            }
            else{
                let newRrate = exchangeRate[from] / exchangeRate[to]
                result = value * newRate
                return result
            }
        }
        else{
            return "NaN"
        }
    }

console.log(exchange('GBP', 'EUR', 2)) 
console.log(exchange('EUR', 'MAD', 10))
console.log(exchange('JPY', 'NZD', 100))

