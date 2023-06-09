const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

$(document).ready(function(){

  // Este trecho é bloqueado no CodePen
  // ele apenas altera a classe do icone
  // e o tipo do input conforme necessidade
  $('#show-password').click(function() {
    if ($(this).hasClass('fa-eye')) {
      $('#login-password').attr('type', 'text');
      $(this).removeClass('fa-eye');
      $(this).addClass('fa-eye-slash');
    } else {
      $('#login-password').attr('type', 'password');
      $(this).removeClass('fa-eye-slash');
      $(this).addClass('fa-eye');
    }
  })
});