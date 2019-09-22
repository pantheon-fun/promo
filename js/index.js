"use strict";

/* Swich img map and intaractive map */
// let jmediaquery = window.matchMedia( "(min-width: 600px)" );
// let map = document.getElementById('map');
// window.addEventListener('resize', function() {
//   if (jmediaquery.matches) {
//     map.innerHTML = '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A992f3be32d8510526adae1688dbd1144e734b0fda3d4fe6f4328beda73da6afa&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=true"></script>';
//   } else {
//     map.innerHTML = '<a href="https://yandex.ru/maps/?um=constructor%3A992f3be32d8510526adae1688dbd1144e734b0fda3d4fe6f4328beda73da6afa&amp;source=constructorStatic" target="_blank"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A992f3be32d8510526adae1688dbd1144e734b0fda3d4fe6f4328beda73da6afa&amp;width=600&amp;height=450&amp;lang=ru_RU" alt="" style="border: 0;" /></a>';
//   }
// });
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

const mapScript = document.createElement("script");
mapScript.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A992f3be32d8510526adae1688dbd1144e734b0fda3d4fe6f4328beda73da6afa&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true"`;


const map = document.getElementById("map");

const options = {
  rootMargin: "0px 0px 250% 0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.appendChild(mapScript);
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(map);


// SOMENAME.forEach(SOMENAME => {
//   observer.observe(section);
// });