import Auth from "./AuthLogin";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";

const Routes = [
    {
        path: '/',
        element: <Auth />,
        children: [{ path: '/', element: <Login /> }]
    },
    {
        path: '/home',
        element: <Home />
    }
]

export default Routes