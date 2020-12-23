import React, { useEffect, useState } from "react";
import axios from "axios";

function UserApi(token) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([
    {
      _id: "5f9d8d26db4c0f3288cd1f74",
      category: "labtops",
      checked: false,
      content: "thuis is one of the great products",
      description: "great product",
      price: 343,
      product_id: "6",
      quantity: 1,
      sold: 0,
      title: "product6",
    },
  ]);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      const getUser = async () => {
        try {
          const res = await axios.get("/api/users/info", {
            headers: { Authorization: token },
          });
          if (res) {
            setUser(res.data);
            if (res.data.role === 1) setIsAdmin(true);
          }
        } catch (err) {
          console.error(err.response.data.error);
        }
      };
      getUser();
    }
  }, [token]);

  const addToCart = (product) => {
    if (!isLoggedIn) alert("Please login to continue buying");

    const check = cart.every((item) => {
      return item._id !== product._id;
    });

    if (check) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      alert("This product already in the shopping cart");
    }
  };

  return {
    isLoggedIn: [isLoggedIn, setIsLoggedIn],
    isAdmin: [isAdmin, setIsAdmin],
    user: [user, setUser],
    cart: [cart, setCart],
    addToCart,
  };
}

export default UserApi;
