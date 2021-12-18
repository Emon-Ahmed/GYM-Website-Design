import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <p>Hello {user?.email}</p>

      {/* <div className="d-flex">
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
      </div> */}
    </>
  );
}
