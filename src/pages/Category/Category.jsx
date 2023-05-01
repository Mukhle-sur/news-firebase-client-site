import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsList from "../NewsList/NewsList";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      <h4> Dragon News Home</h4>
      {categoryNews.map((news) => (
        <NewsList key={news._id} news={news}></NewsList>
      ))}
    </div>
  );
};

export default Category;
