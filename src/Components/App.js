import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PostList from "./PostList";
import AddPost from "./AddPost";
import PostDetail from './PostDetail';

function App() {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/detail/:id" element={<PostDetail />} />
            <Route path="/add" element={<AddPost />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
