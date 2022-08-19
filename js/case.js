document.getElementById('btn-case-plus').addEventListener('click', function(event){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);
    const newCaseNumber = previousCaseNumber + 1;
    if(newCaseNumber > 10){
        return;
    }
    caseNumberField.value = newCaseNumber;
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);
    const newCaseNumber = previousCaseNumber - 1;
    if(newCaseNumber < 1){
        return;
    }
    caseNumberField.value = newCaseNumber;    
})