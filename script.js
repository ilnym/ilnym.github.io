
window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset; // Get current scroll position
  const parallax = document.querySelector('.background-container'); // The container holding the background
  
  // Move the background at a slower speed (adjust the value as needed)
  parallax.style.backgroundPosition = `center ${-(scrollPosition * 0.2)}px`;

});


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
