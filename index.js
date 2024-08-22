// menu toggle

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navLinks = document.querySelector(".nav-items");
const navLinkItem = document.querySelectorAll(".nav-item");

closeMenu.style.display = "none";

openMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

navLinkItem.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
  });
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
  bmiScore.textContent = bmi.toFixed(1);
});

// map api

const key = "CwRcAnGcNXNB6sq91qTN";

const styleJson = `https://api.maptiler.com/maps/95731679-1741-427a-b293-16536ce5be8d/style.json?key=${key}`;

const attribution = new ol.control.Attribution({
  collapsible: false,
});

const map = new ol.Map({
  target: "map",
  controls: ol.control.defaults
    .defaults({ attribution: false })
    .extend([attribution]),
  view: new ol.View({
    constrainResolution: true,
    center: ol.proj.fromLonLat([-73.935242, 40.73061]),
    zoom: 2,
  }),
});
olms.apply(map, styleJson);

const marker = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: [
      new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([-73.935242, 40.73061])),
      }),
    ],
  }),
  style: new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      crossOrigin: "anonymous",
      src: "https://docs.maptiler.com/openlayers/examples/default-marker/marker-icon.png",
    }),
  }),
  zIndex: 1000,  
});
map.addLayer(marker);
 

const locateUs = document.querySelector(".locate-us-btn")

locateUs.addEventListener('click', () => {
  const zoomPoint = ol.proj.fromLonLat([-73.935242, 40.73061]);

  map.getView().animate({
    center: zoomPoint,
    zoom: 15,  
    duration: 5000,  
  });
})