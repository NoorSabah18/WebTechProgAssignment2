//references to interactive elements
const imgFruits1 = document.getElementById("fruit1");
const imgFruits2 = document.getElementById("fruit2");
const imgFruits3 = document.getElementById("fruit3");
const txtCredits = document.getElementById("credits");
const txtWinnings = document.getElementById("winnings");
const txtMessage = document.getElementById("message");
const btnSpin = document.getElementById("spin");
const btnCredit = document.getElementById("credit");
const btnCollect = document.getElementById("collect");

//event listeners
btnSpin.addEventListener("click", spin);
btnCredit.addEventListener("click", credit);
btnCollect.addEventListener("click", collect);

//when page loaded
let count = 0;
txtCredits.innerText=`${count}`;
let winning =0;
txtWinnings.innerText=`${winning}`
document.getElementById("spin").disabled = true;
document.getElementById("collect").disabled = true;

//when credit button clicked
function credit() {
    count++;
    document.getElementById("spin").disabled = false;
    txtCredits.innerText = `${count}`;
}

//when spin button clicked
function spin() {
    if (count>0){
       txtCredits.innerText=`${count}`;
       txtMessage.innerText="" ;
    
    let fruit1 = Math.floor(Math.random() * 8) + 1;
    imgFruits1.setAttribute("src", "fruitimages/fruits" + fruit1 + ".png");
    let fruit2 = Math.floor(Math.random() * 8) + 1;
    imgFruits2.setAttribute("src", "fruitimages/fruits" + fruit2 + ".png");
    let fruit3 = Math.floor(Math.random() * 8) + 1;
    imgFruits3.setAttribute("src", "fruitimages/fruits" + fruit3 + ".png");
    count--;
    txtCredits.innerText = `${count}`;
    if (fruit2 == fruit3){
        txtMessage.innerText = "You have won 5 points";
        for (let i=0; i<5; i++){
            winning++
        }
        txtWinnings.innerText = `${winning}`;
    }
    else if (fruit1 == fruit2 == fruit3){
        txtMessage.innerText = "You have won 10 points";
        for (let i =0; i<10; i++){
            winning++
        } 
        txtWinnings.innerText = `${winning}`;
    }
}
     else{
         txtMessage.innerText=`${"You need credit to play!"}`;
    }
    document.getElementById("collect").disabled = false;
}

//when collect button clicked
function collect() {
    if (winning>0){
        txtMessage.innerText= `${winning} points have been collected. Congratulations! Play Again:)`;
        winning = 0;
        txtWinnings.innerText=`${winning}`;
    }
    else{
        txtMessage.innerText = `You have no winnings! Play Again.`
    }
    event.preventDefault();
    document.getElementById("spin").disabled = true;
}