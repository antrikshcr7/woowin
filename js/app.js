let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");
let seeMoreButtons = document.querySelectorAll(".seeMore");
let backButton = document.getElementById("back");

nextButton.onclick = function () {
  showSlider("next");
};
prevButton.onclick = function () {
  showSlider("prev");
};
let unAcceppClick;
const showSlider = (type) => {
  nextButton.style.pointerEvents = "none";
  prevButton.style.pointerEvents = "none";

  carousel.classList.remove("next", "prev");
  let items = document.querySelectorAll(".carousel .list .item");
  if (type === "next") {
    listHTML.appendChild(items[0]);
    carousel.classList.add("next");
  } else {
    listHTML.prepend(items[items.length - 1]);
    carousel.classList.add("prev");
  }
  clearTimeout(unAcceppClick);
  unAcceppClick = setTimeout(() => {
    nextButton.style.pointerEvents = "auto";
    prevButton.style.pointerEvents = "auto";
  }, 2000);
};
seeMoreButtons.forEach((button) => {
  button.onclick = function () {
    carousel.classList.remove("next", "prev");
    carousel.classList.add("showDetail");
  };
});
backButton.onclick = function () {
  carousel.classList.remove("showDetail");
};

// for the 2nd div
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const cardTop = card.offsetTop;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;

    if (cardTop < scrollTop + windowHeight) {
      card.classList.add("show");
    }
  });
});

// about company head
// Select the heading and image elements
const heading = document.querySelector(".animated-heading");
const image = document.querySelector(".animated-image");

// Create an intersection observer to watch when the element comes into the viewport
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the 'visible' class when the element is in the viewport
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing after it has appeared
      }
    });
  },
  { threshold: 0.5 }
); // Trigger the observer when 50% of the element is in the viewport

// Observe the heading and image elements
observer.observe(heading);
observer.observe(image);

//heading

document.addEventListener("DOMContentLoaded", function () {
  const titleElements = document.querySelectorAll(".slide-in-title");
  const textElements = document.querySelectorAll(".slide-in-text");

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    // For h2 elements
    titleElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < windowHeight - 50) {
        element.classList.add("visible");
      }
    });

    // For p elements
    textElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < windowHeight - 50) {
        element.classList.add("visible");
      }
    });
  }

  // Check visibility on scroll
  window.addEventListener("scroll", checkVisibility);
  // Initial check on page load
  checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
  const titleElements = document.querySelectorAll(".slide-in-title");
  const textElements = document.querySelectorAll(".slide-in-text");
  const imageElements = document.querySelectorAll(".fade-in-image");

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    // For h2 elements
    titleElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < windowHeight - 50) {
        element.classList.add("visible");
      }
    });

    // For p elements
    textElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < windowHeight - 50) {
        element.classList.add("visible");
      }
    });

    // For img elements
    imageElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < windowHeight - 50) {
        element.classList.add("visible");
      }
    });
  }

  // Check visibility on scroll
  window.addEventListener("scroll", checkVisibility);
  // Initial check on page load
  checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".section-title__title");
  const services = document.querySelectorAll(".services-two__single");
  const icons = document.querySelectorAll(".services-two__icon img");

  function checkVisibility() {
    const windowHeight = window.innerHeight;

    // For the title
    if (title.getBoundingClientRect().top < windowHeight - 50) {
      title.classList.add("visible");
    }

    // For service cards
    services.forEach((service) => {
      if (service.getBoundingClientRect().top < windowHeight - 50) {
        service.classList.add("visible");
      }
    });

    // For icons inside service cards
    icons.forEach((icon) => {
      if (icon.getBoundingClientRect().top < windowHeight - 50) {
        icon.classList.add("visible");
      }
    });
  }

  // Check visibility on scroll
  window.addEventListener("scroll", checkVisibility);
  // Initial check on page load
  checkVisibility();
});

window.addEventListener("scroll", () => {
  const productContainer = document.querySelector(".product-container");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    // Adjust the threshold as needed
    productContainer.classList.add("show");
  } else {
    productContainer.classList.remove("show");
  }
});

//for the product section

// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add animation when element is in viewport
function animateOnScroll() {
  const elements = document.querySelectorAll(".product-card");

  elements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add("animate-fade-up");
    }
  });
}

// Listen for scroll events
window.addEventListener("scroll", animateOnScroll);

// Check initially in case elements are in viewport on page load
document.addEventListener("DOMContentLoaded", animateOnScroll);

// for testimonial section
// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add animation when element is in viewport
function animateOnScroll() {
  const elements = document.querySelectorAll(".testimonial-card");

  elements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add("animate-fade-in");
    }
  });
}

// Listen for scroll events
window.addEventListener("scroll", animateOnScroll);

// Check initially in case elements are in viewport on page load
document.addEventListener("DOMContentLoaded", animateOnScroll);
