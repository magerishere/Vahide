import useForm from '../hooks/useForm.js';

const rules = [{
        name: "title",
        conditions: ["required", "max:255"],
    },
    {
        name: "content",
        conditions: ["required", "min:20"],
    },
];
const afterSuccessFullSubmit = () => {
    alert("success");
}
const afterFailedSubmit = () => {
    alert("failed");
}
useForm("form-create-product", {
    rules,
    initialData: {
        userId: parseInt(localStorage.getItem("userId"))
    },
}, {
    successful: afterSuccessFullSubmit,
    failed: afterFailedSubmit
});