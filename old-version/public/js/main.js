'use strict';

/* Swich img map and intaractive map */
let jmediaquery = window.matchMedia('(min-width: 768px)');
window.addEventListener('resize', function() {
  if (jmediaquery.matches) {
    loadMap();
    map.style.zIndex = '2';
  } else {
    map.style.zIndex = '0';
  }
});

/* Widget map */
const map = document.getElementById('widget-map');
let mapStateIsLoaded = 0;
let mapStateIsObserved = 0;

const mapScript = document.createElement('script');
mapScript.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A992f3be32d8510526adae1688dbd1144e734b0fda3d4fe6f4328beda73da6afa&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true`;

function loadMap() {
  if (!mapStateIsLoaded && mapStateIsObserved) {
    map.appendChild(mapScript);
    mapStateIsLoaded = 1;
  }
}

/* Calculator's parent */
// const calculator = document.getElementById('calculator');

/* Schedule's parent */
// const schedule = document.getElementById('schedule');

/* Observer */
const options = {
  rootMargin: '0px 0px 75% 0px',
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      switch (entry.target) {
        case map:
          mapStateIsObserved = 1;
          if (jmediaquery.matches) {
            loadMap();
            map.style.zIndex = '2';
          }
          break;
        // case calculator:
        //   eval(
        //     `var widgetOptions231405 = { bg_color: "transparent" }; (function() { var a = document.createElement("script"), h = "head"; a.async = true; a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=231405&t="+Math.floor(new Date()/18e5); document.getElementsByTagName(h)[0].appendChild(a) })();`
        //   );
        //   break;
        // case schedule:
        //   eval(
        //     `(function (w,d,s,o,f,js,fjs){w['BookformObject']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);}(window,document,'script','Bookform','https://widget.bookform.ru/4487/js'));`
        //   );
        //   eval(`Bookform('embedded',{id:4487});`);
        //   const scheduleContainer = document.querySelector('.schedule');
        //   scheduleContainer.removeChild(scheduleContainer.firstChild);
        //   scheduleContainer.removeChild(scheduleContainer.firstChild);
        //   break;
        default:
          console.log('Switch error');
      }
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(map);
// observer.observe(calculator);
// observer.observe(schedule);

/* FAQ animation */
// const faqItems = document.querySelectorAll('.accordion__question');
// function toggleAccordion() {
//   this.classList.toggle('active');
//   this.nextElementSibling.classList.toggle('active');
// }
// faqItems.forEach(item => item.addEventListener('click', toggleAccordion));
