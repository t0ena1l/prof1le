// Function to handle the fade-in effect
function fadeInOnScroll() {
  const fadeElements = document.querySelectorAll(".fade");

  // Check if elements are in viewport and fade them in
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    // Adjust this value as needed based on when you want the fade effect to start
    const triggerPoint = window.innerHeight - 100;

    if (elementTop < triggerPoint && elementBottom > 0) {
      element.style.opacity = "1";
    }
  });
}

// Event listener for scroll event
window.addEventListener("scroll", fadeInOnScroll);
