import useValidation from "./useValidation.js";
import useInput from './useInput.js';
import useXHR from './useXHR.js';

const useForm = (formId, options = {}, xhrOptions = {}) => {
    const form = document.getElementById(formId);
    //add event Listener submit on form
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = { ... options.initialData };
        let isValidForm = true;
        //get all inputs, inside form such as input, select option and textarea
        const inputs = form.querySelectorAll("input,select,textarea");
        for (const input of inputs) {
            const rule = options.rules.find((r) => r.name === input.name);
            if(!rule) continue;
            const {
                isValid,
                validMsg
            } = useValidation(input, rule)
            const {
                name,
                value
            } = useInput(input, {
                isValid,
                validMsg
            });
            if (isValid) {
                data[name] = value;
            }
            isValidForm = isValidForm && isValid;
        }
        if (isValidForm) {
            useXHR(form,data,xhrOptions);
        }
        
    });
    console.log("hbdsjhbshv")
}

export default useForm;

