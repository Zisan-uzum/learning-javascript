const request = require('request');

const url = "https://api.cryptowat.ch/markets/kraken/ethusd/orderbook";


request(url, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    //   console.log(response)
    body = JSON.parse(body);
    let asks = body["result"]["asks"];
    //console.log(asks)
    let avg = averagePrice(asks, 20); // initialize amount of eth 
    console.log("average is " + avg);
    let amount = amountBuy(asks, 2000); // initialize money
    console.log("the amount that you can buy is "+ amount);
  }

});

function averagePrice(asks, amount_want) {
    let total = 0;
    let amount = 0;

    for(i of asks){
        total += i[0] * i[1];
        amount += i[1];
        //console.log(i[0]);
        if (amount >= amount_want) {
            break;
          }
    }

    return (total/amount); 
   
  }

  function amountBuy(asks, money) {
    let total_cost = 0;
    let total_amount = 0;
    for (i of asks) {
      if (total_cost + i[0] * i[1] < money) {
        total_cost += i[0] * i[1];
        total_amount += i[1];

        //console.log("price is "+ i[0] + " amount is "+ i[1]);
      }
    }
    let avg_price = total_cost / total_amount;
   // console.log("averrage price is "+ avg_price);
    return money / avg_price;
  }