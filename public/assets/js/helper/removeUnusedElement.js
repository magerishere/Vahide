// remove all element that have auth class, if user is guest.
const removeUnusedElement = () => {
    if (!localStorage.getItem("auth")) {
        const authEle = [...document.getElementsByClassName("auth")];
        authEle.forEach((authEle) => authEle.remove());
    } else {
        const guestEle = [...document.getElementsByClassName("guest")];
        guestEle.forEach((guestEle) => guestEle.remove());
    }
}

export default removeUnusedElement;
const i = 0 ;
if ( typeof i === "string") {
    
}