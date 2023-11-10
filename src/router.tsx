import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Body from "./components/body";

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/',
                element: <Body/>
            },
            
        ]
    }
])


export default AppRouter;