(function(){
	"use strict";	
	console.log("fired");
	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");
	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};
	button.addEventListener("click", hamburgerMenu, false);		
})();


// lighting boxes
document.addEventListener('DOMContentLoaded', function() {
	var lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
	var lightbox = document.getElementById('lightbox');
	var closeLightbox = document.getElementById('closeLightbox');
	var lightboxContent = document.querySelector('.lightbox-content');
  
	lightboxTriggers.forEach(function(trigger) {
		trigger.addEventListener('click', function() {
			lightboxContent.src = trigger.src;
			lightbox.style.display = 'block';
		});
	});
  
	closeLightbox.addEventListener('click', function() {
		lightbox.style.display = 'none';
	});
  });
