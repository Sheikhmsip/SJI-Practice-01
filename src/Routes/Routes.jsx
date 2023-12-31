import React from 'react';
import Main from '../Layouts/Main/Main';
import Home from '../Pages/Home/Home';
import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default routes