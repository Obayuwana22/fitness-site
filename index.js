// Image animation/scroll

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const innerScroller = scroller.querySelector(".inner-scroller");
    const scrollerContent = Array.from(innerScroller.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      innerScroller.appendChild(duplicatedItem);
    });
  });
}

// // BMI calculator validation

// const bmiInputs = document.querySelectorAll(".bmi-input");

// bmiInputs.forEach((bmiInput) => {
//   bmiInput.addEventListener("input", () => {
//     console.log(bmiInput.value);
//     bmiInput.value < 0 ? (bmiInput.value = 0) : bmiInput.value;
//   });
// });

// // BMI calculator

// const calculateBmiBtn = document.querySelector(".calculate-btn");
// const weight = document.getElementById("weight");
// const height = document.getElementById("height");

// calculateBmiBtn.addEventListener("click", () => {
//   const bmi = (weight.value / (height.value * height.value)) * 703;

//   const bmiScore = document.querySelector(".bmi-score");
//   bmiScore.innerHTML = bmi.toFixed(1);
// });

// menu toggle

// const openMenu = document.querySelector(".open-menu");
// const closeMenu = document.querySelector(".close-menu");
// const navLinks = document.querySelector(".nav-items");

// closeMenu.style.display = "none";

// openMenu.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
//   openMenu.style.display = "none";
//   closeMenu.style.display = "block";
// });

// closeMenu.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
//   closeMenu.style.display = "none";
//   openMenu.style.display = "block";
// });
