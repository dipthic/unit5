import "./AddHouse.css";
import { useState } from "react";
import axios from "axios";

export const AddHouse = () => {
  const [house, sethouse] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    bachelor: "",
    married: "",
    image: ""
  });

  const houseData = (e) => {
    const { className, value } = e.target;
    sethouse({ ...house, [className]: value });
  };

  const houseHandle
    = (e) => {
      e.preventDefault();
      axios.post("http://localhost:8080/houses", house).then((res) => {
        console.log("houseDetails ", res.data);
      });
      sethouse({
        name: "",
        ownerName: "",
        address: "",
        areaCode: "",
        rent: "",
        bachelor: "",
        married: "",
        image: ""
      });
    };
  return (
    <div className="addHouseContainer">
      <form
        onSubmit={(e) => {
          houseHandle
            (e);
        }}
      >
        <table>
          <tbody>
            <td>
              <label>name</label>
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  houseData(e);
                }}
                className="name"
                value={house.name}
                required
              />
            </td>

            <td>
              <label>ownerName</label>
            </td>
            <td>
              <input
                value={house.ownerName}
                type="text"
                onChange={(e) => {
                  houseData(e);
                }}
                className="ownerName"
                required
              /> <br />
            </td>

            <td>
              <label>address</label>
            </td>
            <td>
              <input
                value={house.address}
                type="text"
                onChange={(e) => {
                  houseData(e);
                }}
                className="address"
                required
              />
            </td>

            <td>
              <label>areaCode</label>
            </td>
            <td>
              <input
                value={house.areaCode}
                type="text"
                onChange={(e) => {
                  houseData(e);
                }}
                className="areaCode"
                required
              />
            </td>

            <td>
              <label>rent</label>
            </td>
            <td>
              <input
                value={house.rent}
                type="text"
                onChange={(e) => {
                  houseData(e);
                }}
                className="rent"
                required
              />
            </td>

            <td>
              <label>preferredTenant</label>
            </td>

            <td>
              <label>bachelor</label>
            </td>
            <td>
              <input
                checked={house.bachelor}
                onChange={(e) => {
                  houseData(e);
                }}
                type="checkbox"
                className="bachelor"
              />
            </td>

            <td>
              <label>married</label>
            </td>
            <td>
              <input
                checked={house.married}
                onChange={(e) => {
                  houseData(e);
                }}
                type="checkbox"
                className="married"
              />
            </td>

            <td>
              <label>image</label>
            </td>
            <td>
              <input
                value={house.image}
                type="text"
                onChange={(e) => {
                  houseData(e);
                }}
                className="image"
                required
              />
            </td>

            <td>
              <input className="submitBtn" type="submit" />
            </td>
          </tbody>
        </table>
      </form>
    </div>
  );
};