import Home from "../Components/Home/Home"
import Login from "../Components/Login/Login"
import PrivateRoute from "./PrivateRoute"

const list_routes = [
    {
        path: '/',
        element: <PrivateRoute />,
        children: [{ path: '/', element: <Home /> }]
    },
    {
        path: '/login',
        element: <Login />
    }
]

export default list_routes;