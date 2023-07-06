// console.log("main.js loaded");

// const hamburger1 = document.querySelector(".hamburger1");
// console.log(hamburger1);

document.querySelector(".hamburger1").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".menu-item1").classList.toggle("active");
});

// $(".hamburger1").on("click", function () {
//   $(this).toggleClass("active");
//   $(".menu-item1").toggleClass("active");
// });

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
