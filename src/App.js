import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import DashboardPage from "./pages/DashboardPage"
import PostsPage from "./pages/PostsPage"
import SinglePostPage from './pages/SinglePostPage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route exact path="/posts" element={<PostsPage />} />
        <Route exact path='/posts/:id' element={<SinglePostPage />} />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  )
}

export default App