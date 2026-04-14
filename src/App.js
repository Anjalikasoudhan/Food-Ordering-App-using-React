import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const App=()=>{
     return(
        <Provider store={appStore}>
        <div className="app">
        <Header />
        <Outlet />
        </div>
        </Provider>
     )
}
const appRouter=createBrowserRouter([
   { path: "/",
    element : <App />,
    errorElement:<Error />,
    children:[
        {
          path:"/",
          element:<Body />
        },
        {
            path:"/about",
            element:<About />
        },
        {
            path:"/contact",
            element:<Contact />
        },
        {
            path:"/restaurant/:resId", //The : makes it dynamic 
            element:<RestaurantMenu />
        },
        {
            path:"/cart",
            element:<Cart />
        }
    ],
   },
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
//console.log(SaleBanner);
root.render(<RouterProvider router={appRouter} />);