import useValidation from './useValidation.js';
const useInput = (input, option = {}) => {
  //get <small> html tag for showing validation message
  const errorElm = input.closest(".form-wrapper").querySelector(".error");
  //empty validation message when submit form
  errorElm.innerHTML = "";
  // if input is invalid, output validation message
  if (!option.isValid) {
    errorElm.innerHTML = option.validMsg;
  }
  return {
    name: input.name,
    value: input.value
  }
}
export default useInput;