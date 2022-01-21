function personHandler(person, increase) {
  const currentNewPerson = getInputValue(person);
  if (increase == true) {
    totalPerson = currentNewPerson + 1;
  }
  if (increase == false && currentNewPerson > 0) {
    totalPerson = currentNewPerson - 1;
  }
  document.getElementById(person + '-person').value = totalPerson;

  if(person == 'first'){
  totalAmount = totalPerson * 150;
  }
  if(person == 'second'){
  totalAmount = totalPerson * 100;
  }
  document.getElementById("total-amount").innerText = '$' + totalAmount;
  const totalVat = totalAmount * 0.1;
  document.getElementById('total-vat').innerText = totalVat;
  const grandAmount = totalAmount + totalVat;
  document.getElementById("grand-amount").innerText = '$' + grandAmount;
}
function getInputTotalValue() {
  const inputPersonFirst = getInputValue("first");
  const inputPersonSecond = getInputValue("second");
  const allPerson = inputPersonFirst * 150 + inputPersonSecond * 100;
  return allPerson;
}

function getInputValue(person) {
  const productInput = document.getElementById(person + "-person");
  const productCount = parseInt(productInput.value);
  return productCount;
}