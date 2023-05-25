import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const hamburger = document.querySelector(".hamburger");
function animateContent(){

  hamburger.addEventListener("click", () => {
	let isActive = hamburger.classList.contains("is-active");
	!isActive ? displayMenu() : hideMenu();
});

const barz = gsap.timeline({ paused: true, duration: 1 });

barz.to(
	".first-bar",
	{
		y: 8,
		ease: "elastic",
	},
	0
)
	.to(
		".third-bar",
		{
			y: -8,
			ease: "elastic",
		},
		0
	)
	.to(
		".second-bar",
		{
			autoAlpha: 0,
		},
		0
	)
	.to(".first-bar", {
		rotate: 45,
		transformOrigin: "center",
	})
	.to(
		".third-bar",
		{
			rotate: 135,
			y: -9.75,
			transformOrigin: "center",
		},
		"-=.5"
	);
// function hamburgerAnimation() {
	
// }
// hamburgerAnimation();

function displayMenu() {
	barz.play();
	hamburger.classList.add("is-active");
	const menu = gsap.timeline();
	menu.to(".nav-list", {
		left: "0%",
		ease: "bounce",
	}).from(".nav-link", {
		y: 20,
		opacity: 0,
		stagger: 0.2,
	});
}
function hideMenu() {
	barz.reverse();
	hamburger.classList.remove("is-active");
	const menu = gsap.timeline();
	menu.to(".nav-link", {
		y: 20,
		opacity: 0,
		onComplete: () => {
			gsap.to(".nav-link", {
				clearProps: "all",
			});
		},
	}).to(".nav-list", {
		left: "100%",
		ease: "bounce",
		onComplete: () => {
			gsap.to(".nav-list", {
				clearProps: "all",
			});
		},
	});
}

// pageTransition
const pageTl = gsap.timeline();
pageTl
.from('header', {
	autoAlpha: 0,
	y: 10
})
	.from(".letter", {
		x: 20,
		y: 5,
		opacity: 0,
		stagger: 0.2,
		ease: "power4",
	}, 0)
	.from('.barz', {
		y: 20,
		opacity: 0,
		stagger: 0.2,
	}, 0)
	.from('.nav-item', {
		x: 20,
		opacity: 0,
		stagger: .2,
	}, '-=1.3')
	.from('.illustration', {
		x: 50,
		opacity: 0,
	}, 'hero')
	.from(['.is-heading', '.hero__description', '.hero__tip'], {
		y: 20,
		opacity: 0,
		stagger: .2,
	}, 'hero')
	.from('form', {
		x: 20,
		autoAlpha: 0.01,
  })
	.from('.sponsor__img', {
		autoAlpha: 0,
		y: 10,
		stagger: {
			each: .2,
			from: "random"
		},
		scrollTrigger: {
			trigger: ".sponsor__brand",
			start: "top 95%",
			end: "bottom 70%",
			scrub: true,
			// markers: true,
		}
	})
	// .from('.features1', {
	// 	autoAlpha: 0,
	// 	y: 10,
	// 	scrollTrigger: {
	// 		trigger: ".features1",
	// 		start: "top 95%",
	// 		end: "top+=50px 90%",
	// 		scrub: true,
	// 		markers: true,
	// 	}
	// })
	.from(['.is-subHeading', '.isDescription__phoneDisplay'], {
		x: 40,
		autoAlpha: 0,
		stagger: .2,
		scrollTrigger: {
			trigger: ".is-subHeading",
			start: "top 95%",
			end: "bottom 70%",
			scrub: true,
			// markers: true,
		}
	})

	.fromTo(['.is__ctaGhost--phoneDisplay', '.is__cta--phoneDisplay'], {
		x: 40,
		autoAlpha: 0,
  }, {
    x: 0,
		autoAlpha: 1,
		stagger: .4,
		scrollTrigger: {
			trigger: ".is__ctaGhost--phoneDisplay",
			start: "top 95%",
			end: "bottom 70%",
			scrub: true,
			// markers: true,
		}
  }, "-=.5")
	.from('.phone-display', {
		autoAlpha: 0,
		y: 10,
		scrollTrigger: {
			trigger: ".phone-display",
			start: "top 95%",
			end: "bottom 70%",
			scrub: true,
			// markers: true,
		}
	})
	.from(['.subheading__textEditor', '.isDescription__textEditor'], {
		autoAlpha: 0,
		y: 10,
		stagger: .2,
		scrollTrigger: {
			trigger: ".subheading__textEditor",
			start: "top 95%",
			end: "bottom 70%",
			scrub: true,
			// markers: true,
		}
	})
	.from(['.is__ctaGhost--textEditor', '.is__cta--textEditor'], {
	  x: 40,
		autoAlpha: 0,
		stagger: .4,
		scrollTrigger: {
			trigger: ".is__ctaGhost--textEditor",
			start: "top 95%",
			end: "bottom 85%",
			scrub: true,
			// markers: true,
		}
	})
	.from('.textEditor', {
		autoAlpha: 0,
		y: 40,
		scrollTrigger: {
			trigger: ".textEditor",
			start: "top 95%",
			end: "center 80%",
			scrub: true,
			// markers: true,
		}
	})
	.from(".letter--footer", {
		x: 20,
		y: 5,
		autoAlpha: 0,
		stagger: 0.2,
		ease: "power4",
		scrollTrigger: {
			trigger: ".letter--footer",
			start: "top 95%",
			end: "bottom 80%",
			scrub: true,
			// markers: true,
		}
	})
	.from(".footer__description", {
		y: 5,
		autoAlpha: 0,
		// ease: "power4",
		scrollTrigger: {
			trigger: ".footer__description",
			start: "top 95%",
			end: "bottom 80%",
			scrub: true,
			// markers: true,
		}
	})
	.from(".is__nav-item--footer", {
		// y: 5,
		autoAlpha: 0,
		stagger: .2,
		scrollTrigger: {
			trigger: ".is__nav-item--footer",
			start: "top 95%",
			end: "bottom 80%",
			scrub: true,
			// markers: true,
		}
	})

	;
}

export { animateContent }

// fetch('https://www.metaweather.com/api/location/2487956/')
// 	.then(response => response.json())
// 	.then(data => console.log(data))