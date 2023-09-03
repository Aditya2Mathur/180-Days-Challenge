import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Header from "./components/Header";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"



export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
 useEffect(() => {
  // Your code that uses fetchBlogPost
  fetchBlogPosts();
}, []);
  return (<div>
        <Header/>
        <Blog/>
        <Footer/>
    </div>)
}
