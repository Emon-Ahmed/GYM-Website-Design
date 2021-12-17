import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function MakeAdmin() {
  return (
    <div className="mx-auto">
      <>
      <h1>Make Admin</h1>
        <Row className="align-items-center">
          <Col sm={5} className="my-2">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control id="inlineFormInputName" placeholder="Email" />
          </Col>
          <Col xs="auto" className="my-1">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </>
    </div>
  );
}
