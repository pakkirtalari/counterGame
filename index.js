let counterElement = document.getElementById("counterValue");

function onDecrement() {
  let previousCountValue = counterElement.textContent;
  let updatedCountValue = parseInt(previousCountValue) - 1;

  if (updatedCountValue < 0){
    counterElement.style.color = "red";
  }
  else if(updatedCountValue > 0){
    counterElement.style.color = "green";
  }
  else{
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCountValue;
}

function onIncrement(){
  let previousCountValue = counterElement.textContent;
  let updatedCountValue = parseInt(previousCountValue) + 1;

  if (updatedCountValue < 0){
    counterElement.style.color = "red";
  }
  else if(updatedCountValue > 0){
    counterElement.style.color = "green";
  }
  else{
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCountValue;
}

function onReset() {
  let countValue = 0;
  counterElement.textContent = countValue;
  counterElement.style.color = "black";
}

