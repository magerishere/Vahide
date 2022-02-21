import useForm from "../hooks/useForm.js";

// rules
const rules = [
  {
    name: "fullName",
    conditions: ["required", "regex:^[آ-ی-ء\\s]+$"],
    messages: { regex: "فقط فارسی وارد شود!" },
  },
  { name: "gender", conditions: ["required"] },
  {
    name: "userName",
    conditions: ["required", "regex:^[a-zA-Z]+$"],
    messages: {
      required: "این فلید خیلی خیلی الزامیست",
      regex: "فقط انگلیسی وارد شود",
    },
  },
  { name: "password", conditions: ["required", "min:8"] },
  {
    name: "passwordConfirmation",
    conditions: ["required", "confirmed:password"],
  },
  { name: "rule", conditions: ["required"] },
];

const afterSuccessfulSubmit = (response) => {
  localStorage.setItem("auth", true);
  localStorage.setItem('userId',response);
  location.href = "/views/user/dashboard.html";
};

const afterFailedSubmit = () => {
  alert("register failed");
};

useForm(
  "form-register",
  { rules },
  {
    successful: afterSuccessfulSubmit,
    failed: afterFailedSubmit,
  }
);
