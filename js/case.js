function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);
    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
        if(newCaseNumber > 10){
            return;
        }
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
        if(newCaseNumber < 1){
            return;
        }  
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

// code for plus button
document.getElementById('btn-case-plus').addEventListener('click', function(event){
    const newCaseNumber = updateCaseNumber(true);
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
});

// code for minus button
document.getElementById('btn-case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
})