import Home from './pages/home/Home'
import UserList from './pages/Users/UsersList'
import NewUser from './pages/NewUser/NewUser'
import Products from './pages/Products/Products'
import Product from './pages/home/product/Product'
let routes = [
  { path: '/', element: <Home /> },
  { path: '/users', element: <UserList /> },
  { path: '/newUser', element: <NewUser /> },
  { path: '/products', element: <Products /> },
  { path: '/Product/:productID', element: <Product /> },
]
export default routes
