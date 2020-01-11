import IMask from 'imask';

export const activateIMask = () => {
  const input = document.querySelector('.form__input_name_tel');
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };

  IMask(input, maskOptions);
};
