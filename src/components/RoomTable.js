import React from "react";

const RoomTable = ({ data }) => {
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Device</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoomTable;
