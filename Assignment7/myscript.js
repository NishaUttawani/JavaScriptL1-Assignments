function donate(){
  document.getElementById("donate").style.visibility = "visible";
}

function go(){
  alert("You have donated Rs."+ Math.round(document.getElementById('amount').value));
}
