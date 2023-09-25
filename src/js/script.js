
const swiper = new Swiper('.swiper', {
  enabled: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

addEventListener ('load', function() {
  const width = document.documentElement.clientWidth;
  if (width < 768) {
    swiper.enable()
  }
  else {
    swiper.disable()
  }

});
window.addEventListener ('resize', function() {
    const width = document.documentElement.clientWidth;
    if (width < 768) {
      swiper.enable()
    }
    else {
      const transform = document.querySelector('.brands__content');
      transform.style.transform = 'none';
      swiper.disable()
    }

});



const btn = document.querySelector('.brands__more-btn');
const content = document.querySelector('.brands__content'); 
const descr = document.querySelector('.brands__more-txt'); 
const mySvg = document.querySelector('.brands__more-svg');




btn.addEventListener('click', function() {
    if (!content.classList.contains('brands__content--full')) {
        content.classList.add('brands__content--full'); 
        mySvg.classList.add('active');
        descr.textContent = 'Скрыть'; 
    } else {
        content.classList.remove('brands__content--full');
        mySvg.classList.remove('active'); 
        descr.textContent = 'Показать всё'; 
    }
    
});


