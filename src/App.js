import React from "react";
import { Routes, Route } from "react-router-dom";
import AddStudent from "./Routes/AddStudent";
import EditStudent from "./Routes/EditStudent";
import Home from "./Routes/Home";
import NotFound from "./Routes/NotFound";
import Student from "./Routes/Student";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/add`} element={<AddStudent />} />
        <Route path={`/student`} element={<Student />} />
        <Route path={`/student/:id`} element={<EditStudent />} />
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
