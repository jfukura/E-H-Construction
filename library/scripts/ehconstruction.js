// TODO: Annotate the code...
function Slider(imgCont, capCont, dotCont) {
	this.imgCont = imgCont;
	this.capCont = capCont;
	this.dotCont = dotCont;

	this.slides = [];
}

// TODO: Cleanup the Slider code a bit. It's a touch messy.
Slider.prototype.run = function () {
	'use strict';

	var s = this;

	var imgs = document.querySelectorAll('.rotator-images-item');
	var cards = document.querySelectorAll('.rotator-card-captions-item');
	var dots = document.querySelector('.rotator-dots');

	// Set the initial live ones...
	dots.children[0].classList += ' is-active';
	imgs[0].classList += ' is-active';
	cards[0].classList += ' is-active';

	cards[0].parentElement.style.height = cards[0].offsetHeight;

	var timer = setTimeout(rotate, 5000);
	var i;

	function rotate() {

		i = $('.rotator-card-captions-item.is-active').index();

		if (i + 2 <= s.slides.length) {
			i++;
		} else {
			i = 0;
		}

		rotateView(s.slides[i]);

		timer = setTimeout(rotate, 5000);
	}

	function rotateView (id) {
		var currImg = document.querySelector('.rotator-images-item.is-active');
		var currDot = document.querySelector('.rotator-dots-dot.is-active');
		var currCard = document.querySelector('.rotator-card-captions-item.is-active');

		currImg.classList = currImg.classList.value.replace(' is-active', '');

		currDot.classList = currDot.classList.value.replace(' is-active', '');
		currCard.classList = currCard.classList.value.replace(' is-active', '');
		// console.log(currCard.classList);
		imgs.forEach(function (v, i) {
			if (imgs[i].dataset.project.indexOf(id) === 0) {

				// Set the proper image to active (add to DOM / make opacity 1)
				imgs[i].classList += ' is-active';

				// Set the proper dot to active (change style)
				dots.children[i].classList += ' is-active';

				// Set the new card's opacity to 0 so we can fade it
				cards[i].style.opacity = 0;

				// Add the is-active class to the card which adds it to the DOM
				cards[i].classList += ' is-active';

				// Set the card container to the current card's height
				cards[i].parentNode.parentNode.style.height = cards[i].offsetHeight + 'px';

				// Set the card's opacity to 1, CSS will add a fade through transition
				cards[i].style.opacity = 1;
			}
		});

	}

	$('.rotator-card').on('mouseenter mouseleave', function (e) {

		if (e.type === 'mouseenter') {
			clearTimeout(timer);
		} else {
			timer = setTimeout(rotate, 5000);
		}
	});

	var dot = document.querySelectorAll('.rotator-dots-dot');
	var len;
	for (i = 0, len = dot.length; i < len; i++) {
		dot[i].addEventListener('click', switchProjectStack);
	}

	function switchProjectStack(event) {

		var clicked = event.target.dataset.project;

		rotateView(clicked);
	}

};

function Lightbox() {
	this.project = document.getElementById('project');
	this.current = '';
	this.caption = '';
	this.next = '';
	this.prev = '';

	this.run = function () {
		// On input, do something
		// if open -> open
		// if close -> close
		// if next/prev -> move
	};
//     var t = $('#ProjectGallery img[src="'+e+'"]').data('title');
//     var c = $('#ProjectGallery img[src="'+e+'"]').data('caption');
//     var next = $('#ProjectGallery img[src="'+e+'"]').parent('li').next().children('img').attr('src');
//     var prev = $('#ProjectGallery img[src="'+e+'"]').parent('li').prev().children('img').attr('src');
}

Lightbox.prototype.open = function () {
	// Open functions
};

Lightbox.prototype.close = function () {
	// Close functions
};

Lightbox.prototype.changeImage = function () {
	// Change the image
};
// Mail function moves to here...