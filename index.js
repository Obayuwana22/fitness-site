// menu toggle

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navLinks = document.querySelector(".nav-items");

closeMenu.style.display = "none";

openMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
});


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

// BMI calculator validation

const bmiInputs = document.querySelectorAll(".bmi-input");

bmiInputs.forEach((bmiInput) => {
  bmiInput.addEventListener("input", () => {
    console.log(bmiInput.value);
    bmiInput.value < 0 ? (bmiInput.value = 0) : bmiInput.value;
  });
});

// BMI calculator

const calculateBmiBtn = document.querySelector(".calculate-btn");
const weight = document.getElementById("weight");
const height = document.getElementById("height");

calculateBmiBtn.addEventListener("click", () => {
  const bmi = (weight.value / (height.value * height.value)) * 703;

  const bmiScore = document.querySelector(".bmi-score");
  bmiScore.innerHTML = bmi.toFixed(1);
});

// map api

mapboxgl.accessToken = 'CwRcAnGcNXNB6sq91qTN'; // Your MapTiler API key
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/e51f47f0-ffb6-4504-8a85-682832a785e5/style.json?key=CwRcAnGcNXNB6sq91qTN', // style URL
    center: [-73.935242, 40.730610], // starting position [lng, lat]
    zoom: 0 // starting zoom
});

const marker = new maptilersdk.Marker({
  opacity: 1
})
  .setLngLat([-73.935242, 40.730610])
  .addTo(map);