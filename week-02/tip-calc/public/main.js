const main = () => {
  console.log('Hello, World!')
}

const updateTip = () => {
  console.log('updated value in text box')
  // get the bill total from the input tag store it a variable
  let billTotal = document.querySelector('.bill-total').value
  billTotal = parseFloat(billTotal)
  console.log(billTotal)

  // calculate the percentages
  const fifteenPercent = billTotal * 0.15
  const eighteenPercent = billTotal * 0.18
  const twentyPercent = billTotal * 0.2
  console.log(fifteenPercent, eighteenPercent, twentyPercent)
  // update the html with the new percentages
  document.querySelector(
    '#fifteen-percent'
  ).textContent = fifteenPercent.toFixed(2)

  document.querySelector(
    '#eighteen-percent'
  ).textContent = eighteenPercent.toFixed(2)

  document.querySelector('#twenty-percent').textContent = twentyPercent.toFixed(
    2
  )
}

const display15PercentTotal = () => {
  // get the bill total
  const billTotal = document.querySelector('.bill-total').value
  // calculate 15%
  const percent = billTotal * 0.15
  const total = percent + parseFloat(billTotal)
  // display the total
  document.querySelector('#total').textContent = parseFloat(total).toFixed(2)
}

const display18PercentTotal = () => {
  // get the bill total
  const billTotal = document.querySelector('.bill-total').value
  // calc
  const total = billTotal * 0.18 + parseFloat(billTotal)
  // display
  document.querySelector('#total').textContent = parseFloat(total).toFixed(2)
}

const display20PercentTotal = () => {
  // get the bill
  const billTotal = document.querySelector('.bill-total').value

  // calc
  const total = billTotal * 0.2 + parseFloat(billTotal)

  //display
  document.querySelector('#total').textContent = parseFloat(total).toFixed(2)
}

document.addEventListener('DOMContentLoaded', main)

document.querySelector('.bill-total').addEventListener('input', updateTip)
document
  .querySelector('.button-15')
  .addEventListener('click', display15PercentTotal)

document
  .querySelector('.button-18')
  .addEventListener('click', display18PercentTotal)

document
  .querySelector('.button-20')
  .addEventListener('click', display20PercentTotal)
