module.exports = function makeExchange(currency) {
    var money = {};
    var money1 = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency <= 0){
        return money;
    }
    if (currency > 0, currency < 10000){
      return coins(currency);
   }
    if(currency > 10000){
        return money1;
    }
}

function coins(currency){
  var money = {
      H: Math.floor(currency/50),
      Q: Math.floor((currency - (50*(Math.floor(currency/50))))/25),
      D: Math.floor(((currency - (50*(Math.floor(currency/50))))-(25*(Math.floor(((currency - (50*(Math.floor(currency/50)))))/25))))/10),
      N: Math.floor((currency - (50*(Math.floor(currency/50)))-(25*(Math.floor((currency - (50*(Math.floor(currency/50))))/25)))-(10*(Math.floor(((currency - (50*(Math.floor(currency/50))))-(25*(Math.floor(((currency - (50*(Math.floor(currency/50)))))/25))))/10))))/5),
      P: Math.floor(((currency - (50*(Math.floor(currency/50)))-(25*(Math.floor((currency - (50*(Math.floor(currency/50))))/25)))-(10*(Math.floor(((currency - (50*(Math.floor(currency/50))))-(25*(Math.floor(((currency - (50*(Math.floor(currency/50)))))/25))))/10))))-(5*Math.floor((currency - (50*(Math.floor(currency/50)))-(25*(Math.floor((currency - (50*(Math.floor(currency/50))))/25)))-(10*(Math.floor(((currency - (50*(Math.floor(currency/50))))-(25*(Math.floor(((currency - (50*(Math.floor(currency/50)))))/25))))/10))))/5)))/1)
     }

     for (var key in money) {
        if (money[key] === 0) {
          delete money[key];
        } }
        return money;
    }