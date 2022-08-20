// code for update quantity
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);
    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
        if(newCaseNumber > 10){
            return 10;
        }
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
        if(newCaseNumber < 1){
            return 1;
        }  
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

// code for plus button
document.getElementById('btn-case-plus').addEventListener('click', function(event){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});

// code for minus button
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})