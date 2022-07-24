import React from "react";

const Clients = () => {
  return (
    <div>
      <section id="client-section">
        <h1 className="h-primary center">Our clients</h1>
        <div id="clients">
          <div className="client-item">
            <img src="../images/logo1.jpg" alt="our-clients" />
          </div>
          <div className="client-item">
            <img src="../images/logo2.jfif" alt="our-clients" />
          </div>
          <div className="client-item">
            <img src="../images/logo3.png" alt="our-clients" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
