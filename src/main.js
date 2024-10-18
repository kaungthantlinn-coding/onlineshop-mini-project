import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";

// const categories = [
//   "electronics",
//   "jewelery",
//   "men's clothing",
//   "women's clothing",
// ];

// const root = document.getElementById("root");
// const app = createElement(
//   "div",
//   { id: "category-section", className: "p-5 " },
//   createElement(
//     "p",{className:"text-2xl text-gray-500 mb-3"},"Product Categories"
//   ),createElement(
//     "div",null,categories.map((category) => createElement("button",{className:"border border-black rounded px-3 py-1 me-3"}, category)) 
//   )
// );

createRoot(root).render(App());
