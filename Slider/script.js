const prev = document.getElementById('completed__btn-left');
const next = document.getElementById('completed__btn-right');
const slides = document.querySelectorAll('.completed__photo');
const dotes = document.querySelectorAll('.completed__navigationitem2');
const links = document.querySelectorAll('.completed__menuitem1');
const cities = document.querySelectorAll('.completed__pth1');
const areas = document.querySelectorAll('.completed__pth2');
const repairTimes = document.querySelectorAll('.completed__pth3');

let index = 0;
                                                //  slides
const activeSlide = n =>{  
  for(let slide of slides){
    slide.classList.remove('active');
  }
    slides[n].classList.add('active');
}

const nextSlide = () => {
  if (index == slides.length - 1){
    index = 0;
    activeSlide(index);
    activeDotes(index);
    activeLinks(index);
    activeCities(index);
    activeAreas(index);
    activeTimes(index);
  } else {
    index++;
    activeSlide(index);
    activeDotes(index);
    activeLinks(index);
    activeCities(index);
    activeAreas(index);
    activeTimes(index);
    }
}
const prevSlide = () => {
  if (index == 0){
    index = slides.length - 1;
    activeSlide(index);
    activeDotes(index);
    activeLinks(index);
    activeCities(index);
    activeAreas(index);
    activeTimes(index);
  } else {
    index--;
    activeSlide(index);
    activeDotes(index);
    activeLinks(index);
    activeCities(index);
    activeAreas(index);
    activeTimes(index);
  }
}
                                                  //dotes
const activeDotes = n =>{    
  for(dot of dotes){
    dot.classList.remove('active');
  }
    dotes[n].classList.add('active');
}
                                                // links
const activeLinks = n =>{    
  for(link of links){
    link.classList.remove('active');
  }
    links[n].classList.add('active');
}

links.forEach((item, indexLink) => {
    item.addEventListener('click', () => {
      index = indexLink;
      activeSlide(index);
      activeDotes(index);
      activeLinks(index);
    })
})
                                                //cities 
 const activeCities = n =>{                                              
 for(city of cities){
    city.classList.remove('active');
  }
    cities[n].classList.add('active');
 }
                                                // areas
 const activeAreas = n =>{                                              
  for(area of areas){
     area.classList.remove('active');
   }
     areas[n].classList.add('active');
  }

  const activeTimes = n =>{                                              
    for(repairTime of repairTimes){
      repairTime.classList.remove('active');
     }
     repairTimes[n].classList.add('active');
    }

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)