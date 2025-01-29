import React from "react";
import './cars.css';
function Cars() {

  return (
    <div>
      <h1>Car List</h1>

      <table className="car-table">
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Toyota</td>
            <td>Land Cruiser</td>
            <td>2023</td>
            <td>$89,990</td>
          </tr>
          <tr>
            <td>Lexus</td>
            <td>LX570</td>
            <td>2024</td>
            <td>$55,000</td>
          </tr>
          <tr>
            <td>Nissan Patrol</td>
            <td>Y62</td>
            <td>2023</td>
            <td>$70,000</td>
          </tr>
          <tr>
            <td>Mercedes</td>
            <td>G-Wagon</td>
            <td>2022</td>
            <td>$72,800</td>
          </tr>
          <tr>
            <td>Toyota</td>
            <td>Tundra</td>
            <td>2023</td>
            <td>$70,800</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cars;
