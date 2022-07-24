import React from "react";
import { useState } from "react";
import Axios from "axios";


function Reservation() {
  const [name, setName] = useState("");
  const [mobileno, setMobileno] = useState(0);
  const [adharno, setAdharno] = useState(0);
  const [members, setMembers] = useState(0);


  const addData = () => {
    Axios.post("http://localhost:3001/create", {
      mobileno: mobileno,
      name: name,
      adharno: adharno,
      members: members,
    }).then(()=>{
      console.log("succcess");
    });
  };


  return (
    <div className="reservation">
      <h2>Book your seat now ⏩</h2>

      <label htmlFor="mobile">mobile-no</label>
      <input
        type="number"
        onChange={(event) => {
          setMobileno(event.target.value);
        }}
      />
      <label htmlFor="name">name</label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label htmlFor="adhar">adhar-no</label>
      <input
        type="number"
        onChange={(event) => {
          setAdharno(event.target.value);
        }}
      />
      <label htmlFor="members">total-members</label>
      <input
        type="number"
        onChange={(event) => {
          setMembers(event.target.value);
        }}
      />
      <br />
      <button onClick={addData} className="confirm">
        Confirm
      </button>
    </div>
  );
}

export default Reservation;
