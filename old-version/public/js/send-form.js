// const form = document.querySelector("form");
// form.addEventListener("submit", e => {
//   e.preventDefault();
//   sendForm();
// })
// function sendForm() {
//   const username = document.querySelector(".form__input_name_username");
//   const tel = document.querySelector(".form__input_name_tel");
//   const user = {
//     user: username.value,
//     tel: tel.value
//   };
//   fetch("/mail", {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then(function(res) {
//     return res.json()
//   }).then(function(res) {
//     // console.log(res);
//     if (res.status == "ok") {
//       // console.log(form);
//       form.removeEventListener("submit", sendForm, false);
//       form.classList.add("active");
//     }
//   })
// };

// /* Tel mask for input - Imask packege */
// const input = document.querySelector('.form__input_name_tel');
// const maskOptions = {
//   mask: '+{7}(000)000-00-00'
// };
// const mask = IMask(input, maskOptions);
