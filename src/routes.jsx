import Home from './pages/home/Home'
import UserList from './pages/Users/UsersList'
import NewUser from './pages/NewUser/NewUser'
import Products from './pages/Products/Products'

let routes = [
  { path: '/', element: <Home /> },
  { path: '/users', element: <UserList /> },
  { path: '/NewUser', element: <NewUser /> },
  { path: '/products', element: <Products /> },
]
export default routes