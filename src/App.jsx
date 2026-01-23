import { RouterProvider } from "react-router-dom"
import { privateRoutes, publicRoutes } from "./router/router"
import { useSelector } from "react-redux"

function App() {

  const isLogin = useSelector(state => state.user.isLogin);
  let route = publicRoutes;
  if (isLogin) {
    route = privateRoutes
  }

  return (
    <>
       <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
