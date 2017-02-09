
// Only allows you make a drink if it's a drink in the drinkRequirements object. 
// Otherwise alert: "Sorry, we don't make DRINKNAME".
// If the drink is part of the drinkRequirements object, 
// reduce the amount of beans by the number of beans required for that drink.
// If there are not enough beans to make that drink, alert: "Sorry, we're all out of beans!".


var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10, 
    americano: 5,
    doubleShot: 15, 
    frenchPress: 12,
  },
  Price: {
    latte: 20,
    americano: 30,
    doubleShot: 40,
    frenchPress: 50
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType]> this.beans || this.beans === 0 ) {
       console.log("Sorry, we're all out of beans!");

    } else if (this.drinkRequirements.hasOwnProperty(drinkType) === true) {
      this.beans -= this.drinkRequirements[drinkType];
      console.log(coffeeShop.beans)
    } else if (this.drinkRequirements.hasOwnProperty(drinkType) === false) {
       console.log("Sorry we don't make " + drinkType);
    }
  },
  money: 500,
  buySupplies: function (numberBeans) {
    var priceSingleBean = 5;
    this.money -= numberBeans*priceSingleBean;
    this.beans += numberBeans;
    console.log(this.money);
    console.log(this.beans);
  },
  buyDrink: function (drinkType) {
    
    //TODO: make sure there is enough beans to add the money
    if(this.beans > this.drinkRequirements[drinkType] ){
      this.makeDrink(drinkType) ;
      this.money += this.Price[drinkType];
    } 
    console.log(this.money);
  }
}




coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");

coffeeShop.buySupplies(5);

coffeeShop.buyDrink("frenchPress");
coffeeShop.buyDrink("latte");

