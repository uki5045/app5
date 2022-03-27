import React from 'react';
import {Home} from "./screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./components";

const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/:movieId'} element={<Detail />} />
          </Routes>
        </BrowserRouter>
    );
};

export default App;