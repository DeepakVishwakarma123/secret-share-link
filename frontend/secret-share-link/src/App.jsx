import CreateSecretLink from './components/CreateSecretLink.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import DecryptSecret from './components/DecryptSecret.jsx'

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          index:true,
          element:<CreateSecretLink/>
        },
        {
          path:"/:linkid",
          element:<DecryptSecret/>
        }
      ]
    }
  ]
)

function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
