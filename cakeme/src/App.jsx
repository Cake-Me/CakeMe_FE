import {createBrowserRouter, RouterProvider} from "react-router-dom";

import MainPage from "./pages/Main.jsx";
import NotFound from "./pages/not-found.jsx";
import RootLayout from "./layout/root-layout.jsx";
import Map from "./pages/MapPage.jsx"
import Community from "./pages/Community.jsx";
import Cake from "./pages/Cake.jsx";
import CakeDesign from "./components/cake/CakeDesign.jsx";


const router = createBrowserRouter([
  {
      path: '/',
      element: <RootLayout/>,
      errorElement: <NotFound/>,
      // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
      children: [
          {
              // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
              index: true,
              element: <MainPage/>
          },
          {
              // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
              path: 'map',
              element: <Map/>
          },
          {
            path: 'community',
            element: <Community/>
        },
        {
          path: 'cake',
          element: <Cake/>
      },
      {
        path: "cake/design", 
        element: <CakeDesign />,
      },
         
      ]
  },

])

function App() {
  return <RouterProvider router={router}/>
}


export default App;