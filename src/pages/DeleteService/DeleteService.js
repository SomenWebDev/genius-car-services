import React from "react";
import useServices from "../hooks/useServices";

const DeleteService = () => {
  const [services, setServices] = useServices([]);
  const handleDelete = (id) => {
    const access = window.confirm("Are you sure?");
    if (access) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };

  return (
    <div>
      {services.map((service) => (
        <div>
          <p>
            {service.name}
            <button onClick={() => handleDelete(service._id)}>X</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default DeleteService;
