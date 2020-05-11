//adding functionality to the links when clicked
var listLink = document.querySelectorAll("a");
var links = document.querySelectorAll("li");


for (var i = 0; i < listLink.length; i++){
    listLink[i].addEventListener("click", function() {
        if (this.classList.contains("active"))
        {
            this.classList.remove("active");
        }
     else{
         var activeLink = document.querySelector("a.active")
         if (activeLink){
             activeLink.classList.remove("active");
         }
         this.classList.add("active");
     }
    }
    );
    

}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active_dot";
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}
