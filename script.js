let calculation = localStorage.getItem('calculation') || '';

// displayCalculation();

function updateCalculation(value){
  calculation += value;

  displayCalculation();

  localStorage.getItem('calculation', calculation);
}

function displayCalculation(){
    document.querySelector('.showNumber').innerHTML = calculation;
}