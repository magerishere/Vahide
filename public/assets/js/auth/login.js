import useForm from '../hooks/useForm.js';
const rules = [
    {
        name : 'userName',
        conditions : ['required' , 'regex:^[a-zA-Z]+$'],
        messages: {
            regex: "انگليسي وارد كنيد!"
        }
    },
    {
        name: 'password',
        conditions :['required']
    },
];

const afterSuccessFullSubmit = (response) => {
    alert(response);
    localStorage.setItem("auth", true);
    localStorage.setItem('userId' , response);
    location.href = "/views/user/dashboard.html";
};
const afterFailedSubmit = () => {
    console.log("login failed!");
};
useForm("form-login" , {rules} , {successful: afterSuccessFullSubmit, failed: afterFailedSubmit,});

