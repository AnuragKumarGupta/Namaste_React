import React from "react";
import ReactDOM from "react-dom/client";

//react.createelement => reactelemnt-js object => htmlelement(render);

// React createelement => object => html(render);

// const heading  = React.createElement("h1",{id:"heading"},"This is heading with react element");

//using JSX;
//JSX(transpiled before it reaches the JS engine) JSX got tranpiled to JS by parcel using babel package
//JSX => react.createElement => reactElement-js object => html element(render)

//react element
const jsxheading = (
  <h1 id="heading" tabIndex={5}>
    Namaste React using JSX
  </h1>
);

//React Component
//class-based component - old
//functiocal component - new

//React functional compponent
const headingComponent = () => {
  return <h1 className="heading">React functional component</h1>;
};
//or
const headingComponent2 = () => (
  <h1 className="heading">Namaste React with Anurag</h1>
); //better syntax using arrow function

// above both function are same

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading); //rendering react element

root.render(headingComponent()); //rendering react component
