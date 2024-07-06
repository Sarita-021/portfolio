import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import "../CSS/app.css";
import Header from "./header";
import Home from "../Pages/home";
import Footer from "./footer";
import MyProjects from "../Pages/myprojects";
import MyBlogs from "../Pages/myblogs";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 1200,
});


const App = () => {


    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Myprojects" element={<MyProjects />} />
                    <Route exact path="/MyBlogs" element={<MyBlogs />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;



