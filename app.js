
class Resource {
  constructor(cost = "None", costResource = "None", boost = "None", produce = "None", initial = 0, buyAmount = 1, cd = 1, prodAmount = 1){
    this.cost = cost
    this.boost = boost
    this.produce = produce
    this.amount = initial
    this.buyAmount = buyAmount
    this.costResource = costResource
    this.cd = cd
    this.prodAmount = prodAmount
  }
  buy(){
    this.amount += this.buyAmount
    this.costResource -= this.cost
  }
};


let seed = new Resource(1, tree, produce = tree, initial = 1)
let tree = new Resource()
