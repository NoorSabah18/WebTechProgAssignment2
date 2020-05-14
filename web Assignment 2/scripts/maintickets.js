//reference to interactive elements
const txtName = document.getElementById("name");
const txtAdress = document.getElementById("adress");
const allShows = document.querySelectorAll("input[name='shows']");
const allDelivery = document.querySelectorAll("input[name='delivery']");
const txtSeats = document.getElementById("seats");
const txtOutput = document.getElementById("output");
const theForm = document.getElementById("TicketsForm");
const btnBookings = document.getElementById("bookings");

//event listener
btnBookings.addEventListener("click", bookings);

let ShowsCost = 79;
let DeliveryCost=0;
let discounts=0;
let showsname = "";
let Deliveryname = "";

    //get selected shows radio button
const selectedShows = document.querySelector("input[name='shows']:checked");
for (let i = 0; i < allShows.length; i++) {
    allShows[i].addEventListener("change", checkShowsPreferences);
}

function checkShowsPreferences() {
    ShowsCost = parseInt(this.value);
}

//get selected delivery radio button
const selectedDelivery = document.querySelector("input[name='delivery']:checked");
for (let i = 0; i < allDelivery.length; i++) {
    allDelivery[i].addEventListener("change", checkDeliveryPreferences);
}

function checkDeliveryPreferences() {
    DeliveryCost = parseInt(this.value);
}

 //displaying show names and delivery preferences
 const showstype = document.querySelector("input[name='shows']:checked");
for (let i = 0; i < allShows.length; i++) {
    allShows[i].addEventListener("change", displayshowsname);
}
function displayshowsname() { 
    for(i = 0; i < allShows.length; i++) { 
        if(allShows[i].checked) 
        showsname= allShows[i].id;       
    } 
} 

const deliverytype = document.querySelector("input[name='delivery']:checked");
for (let i = 0; i < allDelivery.length; i++) {
    allDelivery[i].addEventListener("change", displaydelivery);
}
function displaydelivery() { 
    for(i = 0; i < allDelivery.length; i++) { 
        if(allDelivery[i].checked) 
        Deliveryname= allDelivery[i].id;       
    } 
} 

    //discounts
    const Dis = document.querySelector("input[name='seats']:checked");
for (let i = 0; i < txtSeats.length; i++) {
    txtSeats[i].addEventListener("change", discount);
}
     function discount(){
         if (seats>=6){
        discounts= ((ShowsCost + DeliveryCost) - ((ShowsCost + DeliveryCost)*10/100).toFixed(2));
         }
         if (seats>=10){
         discounts= ((ShowsCost + DeliveryCost) - ((ShowsCost + DeliveryCost)*15/100).toFixed(2));
    }
    if (seats<=5){
        discounts= "No Discount";

    }
}
//when Bookings button clicked
function bookings() {
    if (theForm.checkValidity()) {
        event.preventDefault();
        const seats = parseInt(txtSeats.value);
txtOutput.innerText = `Name:   ${txtName.value}
Address:   ${txtAdress.value}
${seats} tickets for ${showsname} at £${(ShowsCost).toFixed(2)}
Total cost:   £${(seats * (ShowsCost + DeliveryCost)).toFixed(2)} 
${discounts}
${Deliveryname}   £${DeliveryCost.toFixed(2)}
Final Cost:£${((seats * (ShowsCost + DeliveryCost))-discounts+DeliveryCost).toFixed(2)}`;
    }
}