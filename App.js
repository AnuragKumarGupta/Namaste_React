import React from "react";
import ReactDOM from "react-dom/client";

//react element
const MainHeading = () => (
  <h1 id="heading" tabIndex="5">
    Namaste React using JSX
  </h1>
);
/*
Header
  -logo
  -nav item
Body
  -search
  -restaurant container
    -restaurant card
Footer
  -copyright
  -links
  -Address
  -contacts info
*/

//Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.designevo.com/res/templates/thumb_small/quick-takeaway-icon.webp"
          alt="logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { image, name, cuisines, avgRating, costForTwo, deliveryTime } =
    resData?.data;
  return (
    <div className="res-card">
      <img className="res-logo" alt="restaurant logo" src={image} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const resList = [
  {
    type: "restaurant",
    data: {
      name: "Spicy Delight",
      cuisines: ["Indian", "Mughlai"],
      avgRating: 4.5,
      costForTwo: 50000,
      deliveryTime: "30 mins",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPTLtNey0AE0yYNTi7qWPZagDINvz5VSeppXDow=s1360-w1360-h1020",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Sushi Haven",
      cuisines: ["Japanese", "Sushi"],
      avgRating: 4.8,
      costForTwo: 70000,
      deliveryTime: "40 mins",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPTLtNey0AE0yYNTi7qWPZagDINvz5VSeppXDow=s1360-w1360-h1020",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Pasta Paradise",
      cuisines: ["Italian", "Pasta"],
      avgRating: 4.6,
      costForTwo: 60000,
      deliveryTime: "35 mins",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPTLtNey0AE0yYNTi7qWPZagDINvz5VSeppXDow=s1360-w1360-h1020",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Burger Kingdom",
      cuisines: ["American", "Fast Food"],
      avgRating: 4.3,
      costForTwo: 40000,
      deliveryTime: "25 mins",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPTLtNey0AE0yYNTi7qWPZagDINvz5VSeppXDow=s1360-w1360-h1020",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Tandoori Nights",
      cuisines: ["Indian", "Tandoori"],
      avgRating: 4.7,
      costForTwo: 55000,
      deliveryTime: "32 mins",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPTLtNey0AE0yYNTi7qWPZagDINvz5VSeppXDow=s1360-w1360-h1020",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Vegan Bites",
      cuisines: ["Vegan", "Healthy"],
      avgRating: 4.9,
      costForTwo: 45000,
      deliveryTime: "28 mins",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPTLtNey0AE0yYNTi7qWPZagDINvz5VSeppXDow=s1360-w1360-h1020",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Dragon Wok",
      cuisines: ["Chinese", "Asian"],
      avgRating: 4.4,
      costForTwo: 50000,
      deliveryTime: "30 mins",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPTLtNey0AE0yYNTi7qWPZagDINvz5VSeppXDow=s1360-w1360-h1020",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Spicy Delight",
      cuisines: ["Indian", "Mughlai"],
      avgRating: 4.5,
      costForTwo: 50000,
      deliveryTime: "30 mins",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPTLtNey0AE0yYNTi7qWPZagDINvz5VSeppXDow=s1360-w1360-h1020",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Sushi Haven",
      cuisines: ["Japanese", "Sushi"],
      avgRating: 4.8,
      costForTwo: 70000,
      deliveryTime: "40 mins",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPTLtNey0AE0yYNTi7qWPZagDINvz5VSeppXDow=s1360-w1360-h1020",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Pasta Paradise",
      cuisines: ["Italian", "Pasta"],
      avgRating: 4.6,
      costForTwo: 60000,
      deliveryTime: "35 mins",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPTLtNey0AE0yYNTi7qWPZagDINvz5VSeppXDow=s1360-w1360-h1020",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Burger Kingdom",
      cuisines: ["American", "Fast Food"],
      avgRating: 4.3,
      costForTwo: 40000,
      deliveryTime: "25 mins",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPTLtNey0AE0yYNTi7qWPZagDINvz5VSeppXDow=s1360-w1360-h1020",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Tandoori Nights",
      cuisines: ["Indian", "Tandoori"],
      avgRating: 4.7,
      costForTwo: 55000,
      deliveryTime: "32 mins",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPTLtNey0AE0yYNTi7qWPZagDINvz5VSeppXDow=s1360-w1360-h1020",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Vegan Bites",
      cuisines: ["Vegan", "Healthy"],
      avgRating: 4.9,
      costForTwo: 45000,
      deliveryTime: "28 mins",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPTLtNey0AE0yYNTi7qWPZagDINvz5VSeppXDow=s1360-w1360-h1020",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Dragon Wok",
      cuisines: ["Chinese", "Asian"],
      avgRating: 4.4,
      costForTwo: 50000,
      deliveryTime: "30 mins",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPTLtNey0AE0yYNTi7qWPZagDINvz5VSeppXDow=s1360-w1360-h1020",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Seacrh</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); //rendering react component
