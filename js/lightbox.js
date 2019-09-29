const page = document.querySelector(".page");
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);


const images = document.querySelectorAll('.gallery__img');
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.currentSrc;
    while (lightbox.firstChild)
      lightbox.removeChild(lightbox.firstChild);
    lightbox.appendChild(img);
    page.style.overflow = "hidden";
  });
});

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget)
    return;
  lightbox.classList.remove('active');
  page.style.overflow = "auto";
})


/* Bookform */
const bookform = document.createElement('div');
bookform.id = 'bookform-embedded-widget-3458';

const bookformBtn = document.querySelector('.reservation-option_text_form');

bookformBtn.addEventListener('click', e => {
  lightbox.classList.add('active');
  while (lightbox.firstChild)
    lightbox.removeChild(lightbox.firstChild);
  lightbox.appendChild(bookform);
  eval(`(function (w,d,s,o,f,js,fjs){w['BookformObject']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);}(window,document,'script','Bookform','https://widget.bookform.ru/3458/js'));`);
  eval(`Bookform('embedded',{id:3458});`);
  page.style.overflow = "hidden";
});