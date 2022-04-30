import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  if (user) {
    console.log(user);
  }
  const handleSubmit =(event) =>{
    event.preventDefault()
    const order ={
      email: user.email,
      service :service.name,
      serviceId :serviceId,
      address: event.target.address.value,
      phone:event.target.phone.value

    }
  }
  // const [user, setUser] = useState({
  //   name: "Akbar the Great",
  //   email: "akbar@momo.taj",
  //   address: "Tajmohol Road,Md Pur",
  //   phone: "017111111",
  // });
  // const handleAddressChange = (event) => {
  //   console.log(event.target.value);
  //   const { address, ...rest } = user;
  //   console.log(address, rest);
  //   const newAddress = event.target.value;
  //   const newUser = { address: newAddress, ...rest };
  //   setUser(newUser);
  // };
  return (
    <div className="w-50 mx-auto">
      <h2>Please order:{service.name}</h2>
      <form onSubmit ={handleSubmit}>
        <input
          className="w-100"
          type="text"
          name="name"
          placeholder="Your Name"
          value={user.displayName}
          required
          readonly
          disabled
        />{" "}
        <br />
        <input
          className="w-100"
          type="email"
          name="email"
          placeholder="Your Email"
          value={user?.email}
          required
          readonly
          disabled
        />{" "}
        <br />
        <input
          className="w-100"
          type="text"
          name="service"
          value={service.name}
          placeholder="Service"
          required
        />{" "}
        <br />
        <input
          className="w-100"
          type="text"
          name="address"
          placeholder="Address"
          required
        />{" "}
        <br />
        <input
          className="w-100"
          type="text"
          name="phone"
          placeholder="Phone"
          value={user.phone}
          required
        />{" "}
        <br />
        <input type="submit" value="Place Order" /> <br />
      </form>
    </div>
  );
};

export default Checkout;
