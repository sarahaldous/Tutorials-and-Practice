var shopper = {
    name: "Wanda",
    storesToVisit: 3,
    rememberedList: false,
    groceryCart: ["pears", "steak", "almond milk", "salt and vinegar chips", "chocolate", "eggs"],
    phrase: function() {
       return this.name + " needs to visit " + this.storesToVisit + "stores"
    } 
 };
shopper.phrase()
console.log(phrase)
