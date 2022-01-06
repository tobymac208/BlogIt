import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BlogList from "./BlogList";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<BlogList />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
