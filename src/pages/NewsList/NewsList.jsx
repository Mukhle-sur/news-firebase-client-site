import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShare,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const NewsList = ({ news }) => {
  const {
    _id,
    others_info,
    category_id,
    rating,
    total_view,
    title,
    author,
    thumbnail_url,
    image_url,
    details,
  } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <div className="d-flex align-items-center flex-grow-1">
          <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
          <div className="ms-3">
            <p className="mb-0">{author?.name}</p>
            <p className="mb-0">
              {" "}
              <small>
                {moment(author?.published_date).format("yyyy-MM-D")}
              </small>
            </p>
          </div>
        </div>
        <div>
          <FaRegBookmark style={{ marginRight: "10px" }}></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}....{" "}
              <Link to={`/news/${_id}`} className="text-danger">
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex ">
        <div className="d-flex align-items-center flex-grow-1">
          <Rating
            style={{ maxWidth: 100 }}
            value={rating}
            readOnly
          />
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div>
          <FaEye style={{ marginRight: "8px" }}></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsList;
