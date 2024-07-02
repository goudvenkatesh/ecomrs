import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import './index.css'

const App=()=>(
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/about' element={<About/>}/>
  <Route exact path='/products' element={<Products/>}/>
  <Route exact path='/login' element={<LoginForm/>}/>
  </Routes>
  
  </BrowserRouter>
  
)

export default App