import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Notfound from "./Components/NotFound/Notfound";
import ProtectedRouter from "./Components/ProtectedRount";
import Jobs from "./Components/Jobs/Jobs";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRouter Components = {Home}/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/Jobs" element={<ProtectedRouter Components = {Jobs}/>}></Route>
      <Route path="/*" element={<Notfound/>}></Route>
    </Routes>
  );
};

export default App;
