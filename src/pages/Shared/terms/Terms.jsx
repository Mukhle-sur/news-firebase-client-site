import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container className="text-center">
      <h2>This is our terms and condition</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
        voluptates. Cum pariatur error omnis officia. Mollitia aspernatur ipsam
        corporis hic.
      </p>
      <p>
        Go Back to <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
