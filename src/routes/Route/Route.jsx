import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Home/Home/Main";
import Home from "../../pages/Home/Home/Home";
import NewsLayout from "../../Layout/NewsLayout";
import News from "../../pages/News";
import FindCategory from "../../pages/FindCategory";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
               path: '/',
               element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <FindCategory></FindCategory>,
                loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
        
    },
    {
      path: '/newslayout',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
            // path: '/news/:id',
            // element: <News></News>
        }
      ]
    }
])

export default router;