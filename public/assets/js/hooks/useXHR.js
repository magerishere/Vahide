const useXHR = (form, data, options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    xhr.onload = () => {
        if (xhr.status === 200) {
            //when response is successful
            options.successful(xhr.response);
        } else {
            // when response is failed
            options.failed();
        }
    };
}
export default useXHR;

