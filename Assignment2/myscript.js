function average(){
  var i=1;
  var total=0;
  var flag=true;
  for(i=1; i<=10; i++){
    if(document.getElementById("sub"+i).value)
      total+= parseInt(document.getElementById("sub"+i).value);
    else
      flag=false;

  }
  if(flag)
  {
    var avg=total/10;
    document.getElementById("avg").innerHTML=avg;
  }
  else {
    alert("Insufficient data");  }

}
