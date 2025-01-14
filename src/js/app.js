document.addEventListener("DOMContentLoaded", function () {

    const newSlider = (imgs, sliderClass) => {
        const swiperWrapper = document.querySelector(`${sliderClass}-wrapper`);

        for (let img of imgs) {
            const newSlide = document.createElement("div");
            newSlide.classList.add('swiper-slide');
            const slideImg = document.createElement("img");
            slideImg.src = `assets/img/${img}`;
            slideImg.alt = 'slide';
            newSlide.appendChild(slideImg);
            swiperWrapper.appendChild(newSlide);
        }

        return  new Swiper(sliderClass, {
            loop: true,
            spaceBetween: 30,

            pagination: {
                el: `${sliderClass}-pagination`,
                clickable: true,
            },

            // navigation: {
            //     nextEl: `${sliderClass}-button-next`,
            //     prevEl: `${sliderClass}-button-prev`,
            // },

        });

    }

    const slider1Imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

    const slider1 = newSlider(slider1Imgs, '.first-slider');

    new SweetScroll({});
    particlesJS("particles-js", {
        particles: {
            number: {value: 30, density: {enable: !0, value_area: 800}},
            color: {value: "#ffffff"},
            shape: {
                type: "polygon",
                stroke: {width: 0, color: "#000000"},
                polygon: {nb_sides: 5},
                image: {src: "img/github.svg", width: 100, height: 100}
            },
            opacity: {value: .5, random: !1, anim: {enable: !1, speed: 1, opacity_min: .1, sync: !1}},
            size: {value: 3, random: !0, anim: {enable: !1, speed: 19.18081918081918, size_min: .1, sync: !1}},
            line_linked: {enable: !0, distance: 150, color: "#ffffff", opacity: .4, width: 1},
            move: {
                enable: !0,
                speed: 4,
                direction: "none",
                random: !0,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {enable: !1, rotateX: 600, rotateY: 1200}
            },
            nb: 80
        },
        interactivity: {
            detect_on: "canvas",
            events: {onhover: {enable: !1, mode: "grab"}, onclick: {enable: !0, mode: "push"}, resize: !0},
            modes: {
                grab: {distance: 400, line_linked: {opacity: 1}},
                bubble: {distance: 400, size: 40, duration: 2, opacity: 8, speed: 3},
                repulse: {distance: 200, duration: .4},
                push: {particles_nb: 4},
                remove: {particles_nb: 2}
            }
        },
        retina_detect: !0
    })
}, !1);
