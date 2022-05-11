import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8 text-white">
      <h3 className="text-xl mb-5 font-semibold border-b pb-3 ">Categories</h3>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <Link href={`/category/${category.slug}`} key={category.slug}>
            <span className="hover:underline cursor-pointer">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
