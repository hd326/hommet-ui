var index = 1;
slider(1);

function slideImage(n) {
    index = index + n;
    slider(index);
}

function currentSlide(n) {
    slider(index = n);
}

function slider(n) {
    var i;
    var x = document.getElementsByClassName('hero-background-image');
    var dots = document.getElementsByClassName('dots');
    for (i = 0; i < x.length; i++) {
        if (n > x.length) {
            index = 1;
        }
        if (n < 1) {
            index = x.length;
        }
        x[i].style.opacity = "0";
    }
    x[index - 1].style.opacity = "1";
}

let testimonialSlider = document.querySelector('#testimonial-slider-container'),
        testimonial = document.querySelectorAll('.testimonial'),
        arrowLeft = document.querySelector("#testimonial-arrow-left"),
        arrowRight = document.querySelector("#testimonial-arrow-right");

    var current = 1;
    testimonialSlider.style.marginLeft = '-100%';
    
    function slideRight(){
        if (current >= testimonial.length - 1) return;
        current++;
        testimonialSlider.style.transition = '0.5s ease-in-out';
        testimonialSlider.style.marginLeft = '-100' * current + '%';
        //console.log(images[current]);
    }
    
    function slideLeft(){
        if (current <= 0) return;
        current--;
        testimonialSlider.style.transition = '0.5s ease-in-out';
        testimonialSlider.style.marginLeft = '-100' * current + '%';
        //console.log(images[current]);
    }

    arrowRight.addEventListener('click', function() {
        slideRight();
    });

    arrowLeft.addEventListener('click', function() {
        slideLeft();
    });

    testimonialSlider.addEventListener('transitionend', function() {
        //console.log(images[current]);
        if (testimonial[current].id === 'lastClone') {
            testimonialSlider.style.transition = "none";
            current = testimonial.length - 2;
            // we are now at 3,
            // the current is where were 'hopping from'
            // a click to the left would put us at 2
            // -100 * 2 = -200%  the third frame
            testimonialSlider.style.marginLeft = '-100' * current + '%';
            //console.log(current);
        }
        if (testimonial[current].id === 'firstClone') {
            testimonialSlider.style.transition = "none";
            current = testimonial.length - current;
            // current is now 5-4
            // 1
            // when we click once more 
            // current is 2
            // -100 * 2 = -200% the third frame

            testimonialSlider.style.marginLeft = '-100' * current + '%';
            //console.log(current);
        }
    });
    
    setInterval(function(){
        slideRight();
    }, 5000);