var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                var targetElement = document.querySelector(hash);
                if (targetElement) {
                    var targetPosition = targetElement.offsetTop;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    history.pushState(null, null, hash);
                }
            }
        });
    });
});