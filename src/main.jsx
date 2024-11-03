import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main';
import Home from './Component/Home';
import Statistics from './Component/Statistics';
import Dashboard from './Component/Dashboard';
import Gadget from './Component/gadget';
import Specificpages from './Component/Specific';
import Specific from './Component/Specific';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:(()=>fetch("/category.json")),
        children:[
          {
            path:"/",
           element:<Gadget></Gadget>,
           loader:(()=>fetch("/data.json"))

          },
          {
            path:"/category/:category",
           element:<Gadget></Gadget>,
           loader:(()=>fetch("/data.json"))

          }
        ]
        


      },
      {
        path:"/item/:id",
        element:<Specific></Specific>,
        loader:(()=>fetch("/data.json"))
      },
      {
        path:"/satistics",
        element:<Statistics></Statistics>

      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>

      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
