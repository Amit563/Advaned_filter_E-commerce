import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"
import ProductPage from "./components/ProductPage"
import TopSellers from "./components/TopSellers"
import PopularBlogs from "./components/PopularBlogs"

function App() {


  return (
    <Router>
      <div className="flex h-screen">
        <div className="max-w-[15vw]">
          <Sidebar />
        </div>

        <div className="rounded flex justify-center w-[70vw] ">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
          <div className="max-w-[10vw]">
            <TopSellers />
            <PopularBlogs />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
