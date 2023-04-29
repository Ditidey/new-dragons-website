import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Home/Home/Main";
import NewsLayout from "../../Layout/NewsLayout";
import News from "../../pages/News";
import FindCategory from "../../pages/FindCategory";
import CategoryNews from "../../pages/CategoryNews";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import LoginLayout from "../../Layout/LoginLayout";
import ProtectedRoute from "./ProtectedRoute";
import Terms from "../../pages/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
               path: '/',
               element: <Navigate to='/category/0'></Navigate>
                
            },
            {
               path: '/login',
               element: <Login></Login>
            },
            {
               path: '/register',
               element:  <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
 
        ]
        
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            {
               path: ':id',
               element: <FindCategory></FindCategory>,
               loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
            },
 
        ]
        
    },
    {
      path: '/news',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
            path: ':id',
            element:  <ProtectedRoute><News></News></ProtectedRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
])

export default router;