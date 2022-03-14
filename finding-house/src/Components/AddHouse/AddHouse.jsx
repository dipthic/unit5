import { useState } from "react";


export const AddHouse = () => {
  const [userdata, setuserdata] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    bachelor: "",
    married: "",
    image: "",
  });

  const [housedata, sethousedata] = useState([]);

  const handleinput = (e) => {
    const {id,value} = e.target;
    setuserdata({...userdata, [id]:value});


  };

const handlesubmit = (e) => {
 e.preventDefault();
}
  return (
    <div className="addHouseContainer">
      <form>
        <label>name</label>
        <input type="text" className="name" value={""} required />
        <br />
        <label>ownerName</label>
        <input value={""} type="text" className="ownerName" required />
        <br />
        <label>address</label>
        <input value={""} type="text" className="address" required />
        <br />
        <label>areaCode</label>
        <input value={""} type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input value={""} type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={""} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input checked={""} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input value={""} type="text" className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
