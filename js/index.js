"use strict";

/* Swich img map and intaractive map */
let jmediaquery = window.matchMedia( "(min-width: 768px)" );
window.addEventListener('resize', function() {
  if (jmediaquery.matches) {
    loadMap();
    map.style.zIndex = "2";
  } else {
    map.style.zIndex = "0";
  }
});
// TODO: it later: img map for small screens


// window.addEventListener('resize', function() {
//   let mapScript = document.createElement("script");
//   mapScript.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A992f3be32d8510526adae1688dbd1144e734b0fda3d4fe6f4328beda73da6afa&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true"`;
//   document.getElementById("map").appendChild(mapScript);
// });

// document.addEventListener('readystatechange', event => {
//   if (event.target.readyState === "complete") {
//     let mapScript = document.createElement("script");
//     mapScript.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A992f3be32d8510526adae1688dbd1144e734b0fda3d4fe6f4328beda73da6afa&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true"`;
//     document.getElementById("map").appendChild(mapScript);
//   }
// });



/* Widget map */
const map = document.getElementById("widget-map");
let mapStateIsLoaded = 0;
let mapStateIsObserved = 0;

const mapScript = document.createElement("script");
mapScript.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A992f3be32d8510526adae1688dbd1144e734b0fda3d4fe6f4328beda73da6afa&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true"`;

function loadMap() {
  if (!(mapStateIsLoaded) && (mapStateIsObserved)) {
    map.appendChild(mapScript);
    mapStateIsLoaded = 1;
  }
}



/* Observer */
const options = {
  rootMargin: "0px 0px 75% 0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // entry.target.appendChild(mapScript);
      mapStateIsObserved = 1;
      if (jmediaquery.matches) {
        loadMap();
        map.style.zIndex = "2";
      }
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(map);



// SOMENAME.forEach(SOMENAME => {
//   observer.observe(section);
// });