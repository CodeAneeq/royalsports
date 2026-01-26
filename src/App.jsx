import { RouterProvider } from "react-router-dom"
import { adminRoutes, privateRoutes, publicRoutes } from "./router/router"
import { useSelector } from "react-redux"

function App() {

  const isLogin = useSelector(state => state.user.isLogin);
  const role = useSelector(state => state.user.data?.role);
  let route = publicRoutes;
  if (isLogin && role == "user") {
    route = privateRoutes
  } else if (isLogin && role == "admin") {
    route = adminRoutes
  }

  return (
    <>
       <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
