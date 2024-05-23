import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Admin from "../pages/admin/admin";
import NoLayout from "../layouts/noLayout/noLayout";
import NoNavbar from "../layouts/noNavbar/noNavbar";

const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    return user && JSON.parse(user).roleId === '0';
};

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: NoLayout },
];

const privateRoutes = [
    {
        path: '/admin',
        component: isAuthenticated() ? Admin : Login,
        layout: NoNavbar,
    },
];

export { publicRoutes, privateRoutes, isAuthenticated }