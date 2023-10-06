import routes from './routes'
import { useRoutes } from 'react-router-dom'
import './App.css'

function App() {
  let router = useRoutes(routes)
  return (
    <>
      {/* <h1>hleelpo</h1> */}
      {router}
    </>
  )
}

export default App
