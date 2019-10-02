window.onscroll = function() {
  let scroll = document.documentElement.scrollTop;
  let objectHeight = document.querySelector(".first").offsetHeight;
  const masthead = document.querySelector(".masthead");
  
  if (scroll > objectHeight) {
    masthead.classList.add('shown');
  } else {
    masthead.classList.remove('shown');
  }
};