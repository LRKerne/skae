import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Login} from './pages/Login';
import {Questionario} from './pages/Questionario';

export const Router = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login />} />
        <Route path = "/step2" element = {<Questionario />} />
        <Route path = "/step3" element = {<div>Admin Panel</div>} />

      </Routes>
    </BrowserRouter>
  );

}