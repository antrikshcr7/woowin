// Animation on scroll logic
document.addEventListener("DOMContentLoaded", function () {
  const slideTexts = document.querySelectorAll(".slide-in-text");

  function handleScrollAnimation() {
    slideTexts.forEach((text) => {
      const textPosition = text.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (textPosition < screenHeight - 100) {
        text.classList.add("show");
      } else {
        text.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation(); // Run once on page load
});

document.addEventListener("DOMContentLoaded", function () {
  const spicesSection = document.getElementById("spicesSection");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });
  observer.observe(spicesSection);
});
