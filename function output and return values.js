function getRose(money,costperpiece) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("You are able to bye "+ calculate(money,costperpiece)+" Piece of Rose.")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return restofmeoney(money,costperpiece);
}
function calculate(startingmoney,costperpiece){
    var numberofbotos = Math.floor(startingmoney/costperpiece);
    return numberofbotos;
}

function restofmeoney(money,perpiece){
    var remainder = money%perpiece;
    return remainder;
}
console.log("You have remaing "+getRose(101,3)+" money");
