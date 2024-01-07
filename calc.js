let currDisplay = "";
document.querySelector("#screen").value = currDisplay;

function add(a) {
  currDisplay += a;
  document.querySelector("#screen").value = currDisplay;
}

function result() {
  currDisplay = eval(currDisplay);
  document.querySelector("#screen").value = currDisplay;
}

function reset() {
  currDisplay = "";
  document.querySelector("#screen").value = currDisplay;
}