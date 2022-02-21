import useForm from '../hooks/useForm.js';

const afterSuccessFullSubmit = () => {
    localStorage.removeItem("auth");
    location.href = "/index.html";
};

useForm('form-logout', {} , {
    successful: afterSuccessFullSubmit,
});
