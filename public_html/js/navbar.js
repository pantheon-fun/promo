window.onscroll = function() {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let objectHeight = document.querySelector(".first").offsetHeight;
  const masthead = document.querySelector(".masthead");
  
  if (scroll > objectHeight - 10) {
    masthead.classList.add('shown');
  } else {
    masthead.classList.remove('shown');
  }
};