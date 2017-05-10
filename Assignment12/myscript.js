
function myfunc(){
  console.log("haksugdxiusagdxu");
   var error="";
   var today= new Date().getTime();
   var fname=document.getElementById('fname');
   var email=document.getElementById('email');
   var contact=document.getElementById('contact');
   var password=document.getElementById('password');
   var bday=document.getElementById('bday');
   var genderM=document.getElementById('male');
   var genderF=document.getElementById('female');
   var genderO=document.getElementById('other');

    if(fname.checkValidity()==false)
      error+="First Name:"+fname.validationMessage+"<br />";
    if(email.checkValidity()==false)
      error+="Email:"+email.validationMessage+"<br />";
    if(contact.checkValidity()==false)
      error+="Contact No.:"+contact.validationMessage+"<br />";
    if(password.checkValidity()==false)
      error+="Password:"+contact.validationMessage+"<br />";
    if(bday.checkValidity()==false)
      error+="Date of Birth:"+bday.validationMessage+"<br />";
    else if(today-Date.parse(bday.value) <0)
      error+="Date of Birth:"+"You have entered a future date";
    if(!(genderM.checked||genderF.checked||genderO.checked))
      error+="Gender: Select the gender";

    if(error=="")
    {
      document.getElementById('demo').innerHTML="Form Submitted!!";
      document.getElementById('demo').style.color="green";
      alert("Form Submitted");
    }
    else {
      document.getElementById('demo').innerHTML=error;
      document.getElementById('demo').style.color="red";
    }
}
