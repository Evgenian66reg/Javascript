let prev = document.getElementById('btnPrev');
let next = document.getElementById('btnNext');
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let index = 0;

function activeSlide(n){
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
function activeDot(n) {
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}
function prepareCurrentSlide(ind) {
    activeDot(ind);
    activeSlide(ind);
}
function nextSlide() {
  if(index == slides.length - 1){
      index = 0;
      prepareCurrentSlide(index);
  }else{
      index++;
      prepareCurrentSlide(index);
  }
}
function prevSlide() {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    }else{
        index--;
        prepareCurrentSlide(index);
    }
}
next.addEventListener('click',nextSlide);
prev.addEventListener('click',prevSlide);