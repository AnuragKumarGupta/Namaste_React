import React from "react";
import ReactDOM from "react-dom/client";

//react.createelement => reactelemnt-js object => htmlelement(render);

// React createelement => object => html(render);

// const heading  = React.createElement("h1",{id:"heading"},"This is heading with react element");

//using JSX;
//JSX(transpiled before it reaches the JS engine) JSX got tranpiled to JS by parcel using babel package
//JSX => react.createElement => reactElement-js object => html element(render)

//react element
const MainHeading = () => (
  <h1 id="heading" tabIndex="5">
    Namaste React using JSX
  </h1>
);

//React Component
//class-based component - old
//functiocal component - new

//React functional compponent

const HeadingComponent = () => (
  <div id="container">
    <MainHeading />
    <h1 className="heading">React with Functional Component</h1>
  </div>
); //better syntax using arrow function

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading); //rendering react element

root.render(HeadingComponent()); //rendering react component
