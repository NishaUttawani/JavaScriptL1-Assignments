var num1;
var num2;
var opr;
var result;

function btnclick(obj){
  var val=obj.value;
  document.getElementById('input').value+= val;
}

function btnC(){
  num1=num2=opr=result="";
  document.getElementById("input").value="";
}

function operation(obj){
  num1=document.getElementById('input').value;
  opr= obj.value;
  document.getElementById('input').value= opr;
  console.log(opr);
}

function equals()
{
  num2=document.getElementById('input').value.substring(1);
 if(opr=="+" || opr=="-")
  {
    if(num1=="")
      num1="0";
    if(num2=="")
      num2="0";
  }

  if(opr=="*" || opr=="/")
  {
    if(num1=="")
      num1="1";
    if(num2=="")
      num2="1";
  }

  switch(opr)
  {
    case '+': result=parseInt(num1)+parseInt(num2); break;
    case "-": result=parseInt(num1)-parseInt(num2); break;
    case "*": result=parseInt(num1)*parseInt(num2); break;
    case "/": result=parseInt(num1)/parseInt(num2); break;
  }

  document.getElementById('input').value=result;
}
