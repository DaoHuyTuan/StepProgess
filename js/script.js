var BntNext = document.getElementById("nextBtn");
var BntBack = document.getElementById("backBtn");
var Cstep1 = document.getElementById("step1");
var Cstep2 = document.getElementById("step2");
var Cstep3 = document.getElementById("step3");
var i =1 ;
function next(){
  if(i === 1){
      Cstep2.className += ' active';
      i = i +1 ;
      alert(i);
  }
  else {
    if(i === 2){
    Cstep3.className += ' active';
    i = i +1 ;
  }else{
    if(i === 3)
    {
      alert("hoàn thành");
      return;
    }
  }
}
}
function back(){
  if(i === 3){
      Cstep3.className -= ' active';
      i = i -1 ;
      alert(i);
  }
  else {
    if(i === 2){
    Cstep2.className -= ' active';
    i = i -1 ;
  }else{
    if(i === 1)
    {

      return;
    }
  }
  }
}
