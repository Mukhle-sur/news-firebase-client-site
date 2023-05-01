import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button variant="outline-primary">
        <FaGoogle></FaGoogle> Login With Google
      </Button>
      <Button className="mt-2" variant="outline-secondary">
        <FaGithub></FaGithub> Login With Github
      </Button>
      <div className="mt-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <QZone></QZone>
      </div>
      <div className="mt-4">
        <div className="position-relative">
          <img className="opacity-1" src={bg} alt="" />
          <div className="position-absolute top-0 opacity-100">
            <h4>Create an Amazing Newspaper</h4>
            <p>
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <Button variant="danger">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
