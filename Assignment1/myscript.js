var names=[];
var alternatename=[];
function add(){
  var name=document.getElementById('myelement').value;
  names.push(name);
  document.getElementById('myelement').value="";
  alert("Name added");
}

function result(){
  document.getElementById("result").innerHTML="";
  for(var i=0; i<names.length; i=i+2){
  //document.getElementById("result").innerHTML="";
  document.getElementById("result").innerHTML +=names[i] + "<br />";
  }
}
