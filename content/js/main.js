// ################# fixed navbar ###################
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY <= 24) {
    navbar.classList.remove("navbar-fixed");
  } else if (window.scrollY >= navbar.offsetTop) {
    navbar.classList.add("navbar-fixed");
  }
});

// ################# rtl boolean reverse ###################
let rtl;
if (document.body.dir == "ltr") {
  rtl = false;
} else {
  rtl = true;
}

// ################# main section slider ###################
$("#mainOwl").owlCarousel({
  center: true,
  rtl: rtl,
  loop: true,
  margin: 0,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  autoWidth: false,
  items: 1,
  responsiveClass: true,
  responsive: {
    480: {
      nav: false,
      mouseDrag: true,
    },
    768: {
      nav: true,
      mouseDrag: true,
    },
    1000: {
      nav: true,
      mouseDrag: false,
    },
  },
});

// ################# items slider ###################
$("#itemsOwl").owlCarousel({
  center: true,
  rtl: rtl,
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  mouseDrag: false,
  autoWidth: false,
  items: 3,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      mouseDrag: true,
      nav: true,
    },
    480: {
      center: false,
      items: 3,
      mouseDrag: true,
      nav: true,
      mergeFit: true,
    },
    600: {
      center: false,
      margin: 10,
      items: 3,
      mouseDrag: true,
      nav: true,
      mergeFit: true,
    },
    991: {
      center: true,
      items: 6,
      mouseDrag: false,
      mergeFit: false,
    },
  },
});

// ################# Contact Form Validation ###################
$("#contactForm").validate({
  rules: {
    fullName: {
      required: true,
      minlength: 2,
    },
    email: {
      required: true,
      email: true,
    },
    topic: {
      required: "#newsletter:checked",
      minlength: 2,
    },
  },
  messages: {
    fullName: {
      required: "Please enter your name",
      minlength: "Your username must consist of at least 2 characters",
    },
    email: "Please enter a valid email address",
    agree: "Please accept our policy",
    topic: "Please select at least 2 topics",
  },
});
