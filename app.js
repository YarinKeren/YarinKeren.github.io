const button = document.querySelector("#nav-button"); // Hamburger Icon
const menu = document.querySelector("#navbar-sticky"); // Menu
// Get all the buttons in the cards
const buttons = document.querySelectorAll("button[name]");
const mailBtn = document.querySelector("#mailBtn");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

mailBtn.addEventListener("click", () => {
  window.open("mailto:jarin4378@gmail.com");
});

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the name attribute of the clicked button
    const name = button.getAttribute("name");
    // Handle navigation based on the button name
    if (name === "matrix") {
      window.open("https://github.com/YarinKeren/MatrixCalculator");
    } else if (name === "whatToWatch") {
      window.open("https://github.com/YarinKeren/What-To-Watch");
    } else if (name === "workoutTracker") {
      window.open("https://github.com/YarinKeren/workout_app_android");
    } else {
      // Default action if no matching button name found
    }
  });
});
