import React from 'react';
import './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Category, ErrorPage, Recipe } from './pages';
import Navbar  from './components/Navbar/Navbar.jsx';
import { YouTubePlayer } from './components/youtube-player/youtube';
import { Ingredients } from './components/ingredients/ingredients';
import { Instructions } from './components/instructions/instructions';


export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Home />} />

          <Route path="/catalogo/:categoryName">
            <Route index element={<Category />} />

            <Route path=":recipeName/:id" element={<Recipe/>}>
              <Route path='' element={'sei nella index della ricetta'} />
              <Route path='youtube' element={<YouTubePlayer />} />
              <Route path='ingredients' element={<Ingredients/>} />
              <Route path='instructions' element={<Instructions/>} />
            </Route>
          </Route>

          <Route path='/catalogo/:categoryName/new' element={<ErrorPage status={500} />} />

          <Route path='*' element={<ErrorPage status={404} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}