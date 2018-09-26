//Luis C.
//CISC 375
//JS for Assignment 1

// Open the lightBox/Modal
//And display it
function openModal() {
	document.getElementById('myModal').style.display = "block";
}

// Close the lightbox and set diplay to none again
function closeModal() {
	document.getElementById('myModal').style.display = "none";
}

//Initialize the index
var slideIndex = 1;
showSlides(slideIndex);

// Next and bck controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail click to image
function currentSlide(n) {
	showSlides(slideIndex = n);
}

//Slideshow function for moving across images
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");

	//Reset if index goes beyond 20
	if (n > slides.length) {
		slideIndex = 1
	}
	//Go to the top if index is less than 1
	if (n < 1) {
		slideIndex = slides.length
	}
	//hide previous images if moved away
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	//slide show code, not in use
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}