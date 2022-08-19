function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    
    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
        if(newPhoneNumber > 10){
            return 10;
        }
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
        if(newPhoneNumber < 1){
            return 1;
        }
    }
    phoneNumberField.value = newPhoneNumber;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    updatePhoneNumber(true);
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    updatePhoneNumber(false)
})
