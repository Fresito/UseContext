
import { createBrowserRouter } from 'react-router-dom'
import { Header } from '../common/Header';
import { Login } from '../Login';
import { About } from '../About';

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        children: [
            {
                path: 'Login',
                element: <Login/>
            },
            {
                path: 'About',
                element: <About/>
            }
        ]
    },
]);