import {guestRoutes,authRoutes} from '../type/rout-type.js';

const useRoutesGuard = () => {
    // get current path
    const currentPath = location.pathname;
    // get auth key from localStorage
    const isAuth = localStorage.getItem("auth");
    // guest routes check
    if (guestRoutes.findIndex((pathName) => pathName === currentPath) >= 0) {
        if (isAuth) location.href = "/views/user/dashboard.html";
    }
    // auth routes check
    if (authRoutes.findIndex((pathName) => pathName === currentPath) >= 0) {
        if (!isAuth) location.href = "/views/auth/login.html";
    }
};

export default useRoutesGuard;