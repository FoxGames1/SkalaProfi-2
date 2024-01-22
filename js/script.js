$(document).ready(function(){
   $('.slider').slick({
      arrows:true,
      dots:true,
      adaptiveHeight: true,
      speed: 1000,
      autoplay:true,
      autoplaySpeed: 1000,
      draggable: false,
      swipe: true,
      waitForAnimate: true,
   });
   $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function(){
   $('.header__burger').click(function(event) {
      $('.header__burger, .navigation').toggleClass('active');
   });
});





// JavaScript для модального окна
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var modalLink = document.querySelector('.modal');
    var closeModal = document.querySelector('.close');
  
    modalLink.addEventListener('click', function (event) {
      event.preventDefault();
      modal.style.display = 'block';
  
      // Добавляем таймаут для плавной анимации
      setTimeout(function () {
        modal.style.opacity = '1';
        modal.querySelector('.modal-content').style.transform = 'translateY(0)';
        modal.querySelector('.modal-content').style.opacity = '1';
      }, 50);
    });
  
    closeModal.addEventListener('click', function () {
      modal.style.opacity = '0';
      modal.querySelector('.modal-content').style.transform = 'translateY(-50px)';
      modal.querySelector('.modal-content').style.opacity = '0';
  
      // Добавляем таймаут для плавной анимации
      setTimeout(function () {
        modal.style.display = 'none';
      }, 300);
    });
  
    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        closeModal.click();
      }
    });
  });