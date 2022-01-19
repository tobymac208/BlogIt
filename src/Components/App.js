import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PostList from "./PostList";
import AddPost from "./AddPost";
import PostDetail from './PostDetail';
import NotFound from "./NotFound";
import AllPosts from "./AllPosts";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import About from "./About";
import Login from "./Login";

function App() {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/detail/:id" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/add" element={<AddPost />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/posts" element={<AllPosts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
