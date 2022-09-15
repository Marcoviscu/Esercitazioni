import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter,Navigate } from 'react-router-dom';
import App from "./App.jsx";
import { Home, Category, Recipe} from './pages';
import { YouTubePlayer } from "./components/youtube-player/youtube.jsx";
import  Instructions from "./components/instructions/instructions.jsx";
import  Ingredients  from "./components/ingredients/ingredients.jsx";


import { ENDPOINTS } from "./utils/api/endpoints.js";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return fetch(ENDPOINTS.CATEGORIES);
        },
      },
      { path: "/catalogo", element: <Navigate to={"/"} /> },
      {
        path: "/catalogo/:categoryName",
        children: [
          {
            path: "",
            element: <Category />,
            loader: ({ params }) => {
              return fetch(`${ENDPOINTS.FILTER}?c=${params?.categoryName}`);
            },
          },
          {
            path: ":recipeName/:id",
            element: <Recipe />,
            children: [
              { path: "", element: <div>Pagina principale</div> },
              { path: "ingredienti", element: <Ingredients /> },
              { path: "istruzioni", element: <Instructions /> },
              { path: "youtube", element: <YouTubePlayer /> },
            ],
          },
        ],
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
