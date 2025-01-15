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
