function getLove() {
    return Math.floor((Math.random()*100)) +1;
}

var userName = prompt("What is your name?");
var crushName = prompt("what is your crush's name?");
var loveScore = getLove();

if (loveScore >90) {
    alert(userName + " and " + crushName + " love each other like Kanye loves Kanye..." + loveScore + "!");
} else if (loveScore > 70) {
    alert(userName + " and " + crushName + " are " + loveScore + "% compatible! Get married!");
} else if (loveScore > 40) {
    alert(userName + " and " + crushName + " are " + loveScore + "% compatible!\n Could be better...");
} else {
        alert(userName + " and " + crushName + " are " + loveScore + "% compatible!\n Yikes!");

}
