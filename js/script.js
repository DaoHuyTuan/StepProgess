const BntNext = document.getElementById("nextBtn");
const BntBack = document.getElementById("backBtn");
const Cstep1 = document.getElementById("#step1");
const Cstep2 = document.getElementById("#step2");
const Cstep3 = document.getElementById("#step3");
function next(){

  let content = document.getElementsByClassName('active').textContent;
  alert(content);
  switch (content) {
    case step1:
      Cstep2.className += "active";
      break;
    case step2:
      Cstep3.className += "active";
      break;
    case step3:

      break;

  }
}
