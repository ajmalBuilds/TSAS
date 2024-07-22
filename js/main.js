/*const carouselInner = document.querySelector('.carousel-inner'); 
const indicators = document.querySelectorAll('.carousel-indicators button'); 
let currentIndex = 0;
const totalSlides = indicators.length;

indicators.forEach((indicator, index) => { 
    indicator.addEventListener('click', () => {
        moveToSlide(index);
    });
});

function moveToSlide(index) {
    carouselInner.style.transform = `translateX(-${index * 100}vw)`;
    indicators[currentIndex].classList.remove('active'); 
    indicators[index].classList.add('active');
    currentIndex = index;
}

let startX, endX;

carouselInner.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carouselInner.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();  
});

function handleSwipe() {
    if (startX > endX + 50) {
        // Swipe left
        moveToNextSlide();
    } else if (startX < endX - 50) {
        // Swipe right
        moveToPreviousSlide();
    }
}

function moveToNextSlide() {
    const nextIndex = (currentIndex + 1) % totalSlides;
    moveToSlide(nextIndex);
}

function moveToPreviousSlide() {
    // Wrap to last slide if swiping right from the first slide
    const previousIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    moveToSlide(previousIndex);
}
 */
/*  const carouselInner = document.querySelector('.infocus-carousel-inner'); 
const indicators = document.querySelectorAll('.infocus-carousel-indicators button'); 
let currentIndex = 0;
const totalSlides = indicators.length;

indicators.forEach((indicator, index) => { 
    indicator.addEventListener('click', () => {
        moveToSlide(index);
    });
});

function moveToSlide(index) {
    carouselInner.style.transform = `translateX(-${index * 330}px)`;
    indicators[currentIndex].classList.remove('active'); 
    indicators[index].classList.add('active');
    currentIndex = index;
}

let startX, endX;

carouselInner.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carouselInner.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();  
});

function handleSwipe() {
    if (startX > endX + 50) {
        // Swipe left
        moveToNextSlide();
    } else if (startX < endX - 50) {
        // Swipe right
        moveToPreviousSlide();
    }
}

function moveToNextSlide() {
    const nextIndex = (currentIndex + 1) % totalSlides;
    moveToSlide(nextIndex);
}

function moveToPreviousSlide() {
    // Wrap to last slide if swiping right from the first slide
    const previousIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    moveToSlide(previousIndex);
}


 */
 
 
 document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.community-number');
    const speed = 1000; // Adjust the speed as necessary

    const countUp = (counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    };

    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
