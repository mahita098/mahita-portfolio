document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".hamburger1").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".menu-item1").classList.toggle("active");
  });

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
    } else if (href === "/projects") {
      // Handle the Resume page routing
      // You can load the content dynamically or perform any other action
      console.log("Navigating to Projects");
    } else if (href === "/blog") {
      // Handle the Resume page routing
      // You can load the content dynamically or perform any other action
      console.log("Navigating to Blog");
    }
  }

  const serviceItems = document.querySelector(".service-items");
  const popup = document.querySelector(".popup-box");
  const popupCloseBtn = popup.querySelector(".popup-close-btn");
  const popupCloseIcon = popup.querySelector(".popup-close-icon");

  serviceItems.addEventListener("click", function (event) {
    if (event.target.tagName.toLowerCase() == "button") {
      const item = event.target.parentElement;
      const h3 = item.querySelector("h3").innerHTML;
      const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
      popup.querySelector("h3").innerHTML = h3;
      popup.querySelector(".popup-body").innerHTML = readMoreCont;
      popupBox();
    }
  });

  popupCloseBtn.addEventListener("click", popupBox);
  popupCloseIcon.addEventListener("click", popupBox);

  popup.addEventListener("click", function (event) {
    if (event.target == popup) {
      popupBox();
    }
  });

  function popupBox() {
    popup.classList.toggle("open");
  }
});
