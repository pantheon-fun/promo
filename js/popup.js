document.getElementById("reservation").addEventListener("click", function() {
  // Creating an empty `<script />` tag element
  let scriptTag = document.createElement("script");
  // Adding attributes to the element:
  scriptTag.setAttribute("data-type", "popup");
  scriptTag.setAttribute("data-color", "#000000");
  // Set the src attribute
  scriptTag.src = "https://pantheon.laserwar.club/template/standard/web/js/form.js";
  // In order for it to become part of the page, you need to attach it
  // to the DOM, to keep things clean, we will append it to the page's
  // <head /> tag.
  document.head.appendChild(scriptTag);
});