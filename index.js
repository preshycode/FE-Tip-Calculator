const noOfPeople = document.getElementById('nop');
const fText = document.getElementById('fText');
const custom = document.getElementById('custom');
const pBtn = document.querySelectorAll('#pBtn');
const bill = document.getElementById('bill');
const tipAmount = document.getElementById('tipAmount');
const total = document.getElementById('total');


for(let i = 0; i < pBtn.length; i++) {
pBtn[i].addEventListener('click', (e) => {
    e.preventDefault();
    if (noOfPeople.value == 0 || noOfPeople.value == '' ) {
        fText.style.display = 'block';
        noOfPeople.value = 0;
        noOfPeople.parentElement.classList.add('failure');
      console.log( noOfPeople.parentElement);
      
        
    } else {
        fText.style.display = 'none';
        noOfPeople.parentElement.classList.remove('failure');
    }
    const pBtnValue = pBtn[i].value/100;
    const billValue = bill.value;
    const nopValue = noOfPeople.value;
    
    const tipAmountCal = (pBtnValue * billValue)/nopValue;
    const totalCal = billValue / nopValue;
    
    if (isNaN(tipAmountCal) || tipAmountCal == "Infinity" || tipAmountCal == 0) {
        tipAmount.innerHTML = `$0.00`;
        total.innerHTML = `$0.00`;
        
    } else {
        tipAmount.innerHTML = `$${tipAmountCal.toFixed(2)}`;
    total.innerHTML = `$${totalCal.toFixed(2)}`

    }
    
})

}
custom.addEventListener('click', () => {
    if (noOfPeople.value == 0 ) {
        fText.style.display = 'block';
    } else {
        fText.style.display = 'none';
    }

    const customValue = custom.value/100;
    const billValue = bill.value;
   
    const nopValue = noOfPeople.value;
    const tipAmountCal = (customValue * billValue)/nopValue;
    const totalCal = billValue / nopValue;
    

    if (isNaN(tipAmountCal) || tipAmountCal == "Infinity" || tipAmountCal == 0) {
        tipAmount.innerHTML = `$0.00`;
        total.innerHTML = `$0.00`;
        
    } else {
        tipAmount.innerHTML = `$${tipAmountCal.toFixed(2)}`;
    total.innerHTML = `$${totalCal.toFixed(2)}`

    }
    

})
