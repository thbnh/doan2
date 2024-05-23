import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Admin from "../pages/admin/admin";
import Users from '../pages/Users/users';
import Booking from "../pages/Booking/booking";
import Service from "../pages/Service/service";
import NoLayout from "../layouts/noLayout/noLayout";
import NoNavbar from "../layouts/noNavbar/noNavbar";

const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    return user && JSON.parse(user).roleId === '0';
};

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/service', component: Service },
    { path: '/booking', component: Booking },
    { path: '/login', component: Login, layout: NoLayout },
    { path: '/user-information', component: Users, layout: NoNavbar },
];

const privateRoutes = [
    {
        path: '/admin',
        component: isAuthenticated() ? Admin : Login,
        layout: NoNavbar,
    },
];

export { publicRoutes, privateRoutes, isAuthenticated }