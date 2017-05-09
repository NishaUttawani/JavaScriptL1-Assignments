var vowels=['a','e','i','o','u'];
var count=0;
var ar=[];

function find(){
  var myString= document.getElementById('myString').value;
  findVowels(myString);
}

function findVowels(str){
  ar=[];
  count=0;
  for(var i=0; i<str.length; i++){
    if(vowels.indexOf(str.charAt(i)) >-1)
    {
      count++;
      ar.push(str.charAt(i));

    }
  }
  document.getElementById('noOfVowels').innerHTML=count;
  document.getElementById('listOfVowels').innerHTML=ar;
}
