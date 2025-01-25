import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";

// const root = document.querySelector("#root");
// const title = document.createElement("h1");
// title.classList.add("text-3xl", "text-gray-500","mb-4");
// title.innerText = "Product Categories";

// //arrow functions
// const categoryButton = (category) => {
//   const button = document.createElement("button");
//   button.classList.add("border","border-black","px-4", "py-2","me-2");
//   button.innerText = category;
//   return button;
// };
// root.appendChild(title);
// //array of categories
const categories = [
  "electronics",
  "jewelry",
  "men's clothing",
  "women's clothing",
];

// //forEach
// categories.forEach((category) => {
//   const button = categoryButton(category);
//   root.appendChild(button);
// });

const root = document.querySelector("#root");

//view
// const app = createElement(
//   "div",
//   {id: "category-section", className: "p-4"},
//   createElement(
//     "h1",
//     { className: "text-3xl text-gray-500 mb-4" },
//     "Product Categories"
//   ),
//   createElement(
//     "div",
//     null,
//     categories.map((category) =>
//       createElement(
//         "button",
//         { className: "border border-black px-4 py-2 me-2" },
//         category
//       )
//     )
//   )
// );
// console.log(app);
//view render
createRoot(root).render(App());
