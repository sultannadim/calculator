function calculator(btnValue) {
  document.getElementById("result").value += btnValue;
}

function clearAll(clearMe) {
  document.getElementById("result").value = clearMe;
}

function answer() {
  const result = document.getElementById("result").value;
  const calculation = eval(result);
  document.getElementById("result").value = calculation;
}
