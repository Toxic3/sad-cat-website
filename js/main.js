// Function called when 3 bars have been clicked
function responsiveNav() {
    // Create a variable that gets the top nav bar
    var x = document.getElementById("mainTopnav");
    // If the class of that variable is not responsive
    if (x.className === "topnav") {
      // Add to the class name responsive to call that class styling
      x.className += " responsive";
      // If the class is responsive
    } else {
      // Set the class name to not responsive I.E: They are closing it
      x.className = "topnav";
    }
  }

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("modalImg");
var modalImg = document.getElementsByClassName("modal-content");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};