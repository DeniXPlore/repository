const prev = document.getElementsByClassName('.completed__btn-left');
const next = document.getElementsByClassName('.completed__btn-right');
const slides = document.querySelectorAll('.completed__photo');
const dotes = document.querySelectorAll('.completed__navigationitem2');

let index = 0;
 
const activeSlide = n =>{
  console.log(n);
  for (slide of slides){
    slides.classlist.remove('active');
  }
    slides[n].classlist.add('active');
}

const nextSlide = () => {
  if (index == slides.length - 1){
    index = 0;
    activeSlide(index);
  } else {
    index++;
    activeSlide(index);
  }
}
const prevSlide = () => {
  if (index == 0){
    index == slides.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
}
next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)