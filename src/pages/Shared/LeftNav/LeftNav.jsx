import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://my-frist-server-mukhle-sur.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div>
      <h4>All Caterogy</h4>
      <div className="">
        <h4 className="bg-light p-2 text-center">National News</h4>
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              className="text-decoration-none text-dark ms-5 "
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
