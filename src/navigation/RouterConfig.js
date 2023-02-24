import { lazy, Suspense } from 'react';
import {createBrowserRouter} from 'react-router-dom'
import ErrorElement from './ErrorElement'
import AppLayout from '../layout/AppLayout'
import Dashboard from '../Components/Dashboard'
import Shimmer from '../Components/Shimmer';

const Restaurant = lazy(()=>import('../Components/Restaurant'))

const appRouter = createBrowserRouter([{
    path:"/",
    element:<AppLayout/>,
    errorElement: <ErrorElement/>,
    children:[{ path:"/",
    element: <Dashboard/>},
{
    path:"restaurant/:id",
    element: <Suspense fallback={<Shimmer/>}>
<Restaurant/>
    </Suspense> 
}]

},
])

export default appRouter