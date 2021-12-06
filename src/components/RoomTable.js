import React from "react";
import { Table } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const RoomTable = ({ room }) => {
  const { devices } = room;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>
            <FormattedMessage id="Device" />
          </th>
          <th>
            <FormattedMessage id="Value" />
          </th>
        </tr>
      </thead>

      <tbody>
        {devices &&
          devices.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.desired.value}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default RoomTable;
