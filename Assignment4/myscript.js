var myarray=[];
function arrayReverse(arr){
  return arr.reverse();
}

function arraySize(arr){
  return arr.length;
}

function add(){
  var el=document.getElementById('element').value;
  document.getElementById('element').innerHTML="";
  myarray.push(el);
  document.getElementById('original').innerHTML+="<br />"+ el;

}

function reverse(){
  var reverseArray=arrayReverse(myarray);
  for(var i=0; i<reverseArray.length; i++){
    document.getElementById('reverse').innerHTML+="<br />"+reverseArray[i];
  }
}

function size()
{
  document.getElementById("size").innerHTML=arraySize(myarray);
}
