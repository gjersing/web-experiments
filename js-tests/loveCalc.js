function getLove() {
    return Math.floor((Math.random()*100)) +1;
}

var userName = prompt("What is your name?");
var crushName = prompt("what is your crush's name?");
alert(userName + " and " + crushName + " are " + getLove() + "% compatible!");