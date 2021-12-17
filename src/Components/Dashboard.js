import React from "react";
import { Card } from "react-bootstrap";

export default function Dashboard() {
  return (
    <>
      <p>Hello name (not name? Log Out)</p>

      <div className="d-flex">
        <Card className="mx-1" border="primary" style={{ width: "18rem" }}>
          <Card.Header className="fw-bold">Total Order</Card.Header>
          <Card.Body>
            <Card.Title> <h1 className="fw-bolder" >00</h1> </Card.Title>
          </Card.Body>
        </Card>
        <Card className="mx-1" border="warning" style={{ width: "18rem" }}>
          <Card.Header className="fw-bold">Pending Order</Card.Header>
          <Card.Body>
            <Card.Title><h1 className="fw-bolder" >00</h1> </Card.Title>
          </Card.Body>
        </Card>
        <Card className="mx-1" border="danger" style={{ width: "18rem" }}>
          <Card.Header className="fw-bold">Cancelled Order</Card.Header>
          <Card.Body>
            <Card.Title><h1 className="fw-bolder" >00</h1> </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
