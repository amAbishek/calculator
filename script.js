const display = document.getElementById("display");
function addto(input) {
  display.value += input;
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function clear() {
  display.value = "";
}
