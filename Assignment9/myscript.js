var CD={
  name:"Reference CD",
  publisher:"ABC publishers",
  price:450
}

var p=CD.price + (CD.price*0.1);
var finalPrice=p-(p*0.03);

function displayAllDetails(){
  document.getElementById('name').innerHTML=CD.name;
  document.getElementById('publisher').innerHTML=CD.publisher;
  document.getElementById('price').innerHTML="Rs."+CD.price;
  document.getElementById('final').innerHTML="Rs."+finalPrice;
}
