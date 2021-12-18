import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from 'react-redux';
export default function Order() {
  const {orders} = useSelector(state=> state.customer)
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
        {orders?.map(item=> <tr key={item._id}>
           <td >{item.name}</td>
          </tr>)}
        </tbody>
      </Table>
    </div>
  );
}
