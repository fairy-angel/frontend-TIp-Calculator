// Variables//

//input//
let bill= Number(document.getElementById('inputBill').value);
let buttonTip= Number(document.getElementById('buttonTip').value);
let numberPpl= Number(document.getElementById('inputBill').value);
let reset= document.getElementById('resetButton');
//output//
let tipAmount= document.getElementById('tipAmount').value;
let total= document.getElementById('total').value;
let finalBill



tipAmount = bill.value * (buttonTip.value/100);
total= tipAmount.value/numberPpl.value; 

//event listeners//
document.getElementById("buttonTip").addEventListener("click", calculateTip);

function calculateTip(){
    const dollarsPerPerson =(
        bill.value * (buttonTip.value/100) /
        totalPeople.value
        ).toFixed(2);

   // displayTip
   // display Percentage
    
}

//make values show up in the total section//


