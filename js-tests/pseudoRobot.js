function getMilk(bottles, money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var cost = bottles * 1.5;
  alert("Buy " + bottles + " bottles of milk for $" + cost + ".");
  alert("Change due: $" + (cost%1.0));
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  
  return (money - cost);
}

var change = getMilk(3, 5);
alert("Your change is ", change);
