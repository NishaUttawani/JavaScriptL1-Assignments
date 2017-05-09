function sum(){
  var num1=parseInt(document.getElementById("input1").value);
  var num2=parseInt(document.getElementById("input2").value);
  if(isNaN(num1)||isNaN(num2))
  {
    alert("Sorry... Only numbers will be added");
  }
  else
    document.getElementById('sum').innerHTML=num1+num2;
}
