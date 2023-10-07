import routes from './routes'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  let router = useRoutes(routes)
  return (
    <>
      <Topbar />
      <div className="contaienr">
        <Sidebar />
        {router}
      </div>
    </>
  )
}

export default App
