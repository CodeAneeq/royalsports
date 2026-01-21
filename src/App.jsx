import { RouterProvider } from "react-router-dom"
import { publicRoutes } from "./router/router"

function App() {

  return (
    <>
       <RouterProvider router={publicRoutes}></RouterProvider>
    </>
  )
}

export default App
