import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleChecked = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <div className="bg-light py-5">
      <Container>
        <h2 className="text-center">Register your account</h2>

        <Form onSubmit={handleRegister} className="bg-white w-25 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhoto">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Enter your photo-url"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={handleChecked}
              type="checkbox"
              label={
                <>
                  Accept <Link to="/terms">Term & Conditions</Link>
                </>
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!accepted}>
            Register
          </Button>
          <br></br>
          <Form.Text className="text-secondary">
            Already Have An Account ? <Link to="/login">Login</Link>
          </Form.Text>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
