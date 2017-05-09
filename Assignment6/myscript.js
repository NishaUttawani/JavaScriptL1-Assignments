function go(){
  var bg=document.getElementById('background').value;
  var fg=document.getElementById('foreground').value;
  console.log(bg);
  document.body.style.backgroundColor=bg;
  document.body.style.color=fg;
}
