
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementInt = parseInt(elementString);
    return elementInt;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);


    // calculate tax
    const texAmount = parseFloat((currentSubTotal * 0.1).toFixed(2));
    setTextElementValueById('tax-amount', texAmount);

    const finalAmount = currentSubTotal + texAmount;
    setTextElementValueById('final-total', finalAmount);

}
