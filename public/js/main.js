document.querySelector(".hamburger1").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".menu-item1").classList.toggle("active");
});

// const projectsMenuItem = document.getElementById("projects-menu-item");
// projectsMenuItem.addEventListener("click", function () {
//   window.location.href = "projects.html"; // Replace 'resume.html' with the correct path to your resume page
// });

// const resumeMenuItem = document.getElementById("resume-menu-item");
// resumeMenuItem.addEventListener("click", function () {
//   window.location.href = "resume.html"; // Replace 'resume.html' with the correct path to your resume page
// });

// Get all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Add event listeners to each navigation link
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default link behavior

    const href = navLink.getAttribute("href"); // Get the link's href attribute

    // Use history.pushState to change the URL without refreshing the page
    history.pushState(null, null, href);

    // Call the function to handle the routing based on the href
    handleRouting(href);
  });
});

// Function to handle routing based on the href
function handleRouting(href) {
  if (href === "/") {
    // Handle the Home page routing
    // You can show/hide the relevant content or perform any other action
    console.log("Navigating to Home");
  } else if (href === "/resume") {
    // Handle the Resume page routing
    // You can load the content dynamically or perform any other action
    console.log("Navigating to Resume");
  }
}
