import React from "react";
import r1 from "../../image/r1.jpg";
import r2 from "../../image/r2.jpg";
import r3 from "../../image/r3.jpg";
import g5 from "../../image/g5.jpg";
import home3 from "../../image/home3.jpg";
import g3 from "../../image/g3.jpg";
import { NavLink } from "react-router-dom";

const Room = () => {
  return (
    <>
      <section className="room top" id="room">
        <div className="container">
          <div className="heading_top flex1">
            <div className="heading">
              <h5>RAISING COMFORT TO THE HIGHEST LEVEL</h5>
              <h2>Rooms $ Suites</h2>
            </div>
            <div className="button">
              <button className="btn1">
                <NavLink to={"/AllRooms"}>VIEW ALL</NavLink>
              </button>
            </div>
          </div>
          <div className="content grid">
            <div className="box">
              <div className="img">
                <img src={r1} alt="image" />
              </div>
              <div className="text">
                <h3>Deluxe King Room </h3>
                <p>
                  <span>$</span>75 <span>/per night</span>{" "}
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={r2} alt="image" />
              </div>
              <div className="text">
                <h3>Deluxe Double/Double Room</h3>
                <p>
                  <span>$</span>150 <span>/per night</span>{" "}
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={r3} alt="image" />
              </div>
              <div className="text">
                <h3>Junior Suite </h3>
                <p>
                  <span>$</span>190 <span>/per night</span>{" "}
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={g5} alt="image" />
              </div>
              <div className="text">
                <h3>Deluxe King Room</h3>
                <p>
                  <span>$</span>80<span>/per night</span>{" "}
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={home3} alt="image" />
              </div>
              <div className="text">
                <h3>Deluxe Double/Double Room</h3>
                <p>
                  <span>$</span>130<span>/per night</span>{" "}
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={g3} alt="image" />
              </div>
              <div className="text">
                <h3>Junior Suite</h3>
                <p>
                  <span>$</span>200<span>/per night</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Room;
