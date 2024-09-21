import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";
import RecipeCategory from "./Components/RecipeCategory/RecipeCategory";
import FilteredCategory from "./Components/FilteredCategory/FilteredCategory";
import { useState } from "react";
import About from "./Components/About/About";

function App() {
  const [ searchData, setSearchData] = useState('') 
  return (
    <Router>
      <div className="App">
        <NavBar setSearchData={setSearchData}/>

        <Routes>
          <Route exact path="/" element={<Home searchData={searchData}/>}/>
          <Route path="/recipe/:id" element={<RecipeDetail />}/>
          <Route exact path="/Category" element={<RecipeCategory />}/>
          <Route path="/Category/:id" element={<FilteredCategory />}/>
          <Route exact path="/About" element={<About />}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
