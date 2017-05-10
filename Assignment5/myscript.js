var num1=parseInt(prompt("Enter first number"));
var num2=parseInt(prompt("Enter second number"));
function sum(){
  if(isNaN(num1)||isNaN(num2))
    alert("only numbers can be added");
  else {
    alert("sum:"+(num1=num2));
  }
}
