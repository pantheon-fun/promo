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

  const res = await Ajax.post('/mail', user);

  if (res.status === 'ok') {
    form.removeEventListener('submit', sendForm, false);
    form.classList.add('active');
  }
};

export const activateForm = () => {
  activateIMask();

  form.addEventListener('submit', async e => {
    e.preventDefault();
    await sendForm();
  });
};
