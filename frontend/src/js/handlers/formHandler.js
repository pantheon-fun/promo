import { activateIMask } from '../packages/imask';

import { Ajax } from '../helpers/Ajax';

import { elements } from '../utils/appElements';

const { form } = elements;

const sendForm = async () => {
  const username = document.querySelector('.form__input_name_username');
  const tel = document.querySelector('.form__input_name_tel');

  const user = {
    user: username.value,
    tel: tel.value,
  };

  const res = await Ajax.post('/form', user);

  if (res.ok) {
    form.removeEventListener('submit', processSubmit);
    form.classList.add('active');
  }
};

const processSubmit = async e => {
  e.preventDefault();

  await sendForm(e);
};

export const activateForm = () => {
  activateIMask();

  form.addEventListener('submit', processSubmit);
};
