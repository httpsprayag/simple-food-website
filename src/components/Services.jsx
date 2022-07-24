import React from "react";

const Services = () => {
  return (
    <div>
      <section className="services-container">
        <h1 className="h-primary center">Our services</h1>
        <div id="services">
          <div className="box">
            <img src="../images/food1.jpg" alt="" />
            <h2 className="h-secondary center">food odering</h2>
            <p className="center" id="p1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque rem labore pariatur facilis, dolorem nihil minima
              soluta sapiente? Aliquam, accusantium?
            </p>
          </div>
          <div className="box">
            <img src="../images/food2.jpg" alt="" />
            <h2 className="h-secondary center">food catering</h2>
            <p className="center" id="p2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque rem labore pariatur facilis, dolorem nihil minima
              soluta sapiente? Aliquam, accusantium?
            </p>
          </div>
          <div className="box">
            <img src="../images/delivery.webp" alt="" />
            <h2 className="h-secondary center">bulk odering</h2>
            <p className="center" id="p3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque rem labore pariatur facilis, dolorem nihil minima
              soluta sapiente? Aliquam, accusantium?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
